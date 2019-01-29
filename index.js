const Koa = require("koa");
const cors = require("koa2-cors");
const request = require('request');
const Parser = require("rss-parser");

const app = new Koa();
const parser = new Parser();

app.use(async(ctx, next) => {
    const feedURLreg = /^\/feed\//;
    const pathname = ctx.path;
    if (feedURLreg.test(pathname)) {
        // feed内容
        const url = pathname.replace(feedURLreg, '');
        const data = await parser.parseURL(url);
        ctx.body = data;
    } else {
        await next();
    }
});
app.use(async(ctx) => {
    const httpURLreg = /^https?/;
    const url = ctx.url.substring(1);
    if (httpURLreg.test(url)) {
        // 普通 get请求代理
        const data = await request.get(url);
        ctx.body = data;
    } else {
        ctx.body = `invalid url: ${url}`;
    }
});
app.use(cors());

app.listen(8080);
