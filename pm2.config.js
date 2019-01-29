module.exports = {
    apps: [
        {
            name: "proxy-server",
            script: "index.js",
            output: "./logs/out.log",
            error: "./logs/error.log",
            log: "./logs/log.log",
        },
    ],
};
