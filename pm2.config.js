module.exports = {
    apps: [
        {
            name: "proxy-server",
            script: "main.js",
            output: "./logs/out.log",
            error: "./logs/error.log",
            log: "./logs/log.log",
        },
    ],
};
