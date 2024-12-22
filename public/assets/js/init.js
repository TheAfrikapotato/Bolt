async function init() {
    try {
        const connection = new BareMux.BareMuxConnection("/baremux/worker.js");

        let wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";

        if (await connection.getTransport() !== "/epoxy/index.mjs") {
            await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
            console.log("Using websocket transport " + "wisp url is: " + wispUrl);
        }
        const scramjet = new ScramjetController({
            prefix: "/scram/service/",
            files: {
                wasm: "/scram/wasm.js",
                worker: "/scram/worker.js",
                client: "/scram/client.js",
                shared: "/scram/shared.js",
                sync: "/scram/sync.js"
            },
        });
        window.sj = scramjet;
        scramjet.init("/sw.js");


    } catch (error) {
        console.error("Error setting up BareMux transport:", error);
    }
}
init();