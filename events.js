const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
})

emitter.emit("customEvent", "Please, recruit me?", "Mahes");
emitter.emit("customEvent", "Impressive! Why not? I will.", "You");
