import path from "path";
import views from "co-views";
// import parse from "co-body";
import instantTheme from "koa-instant-theme";

const render = views(path.resolve(__dirname, "../views"), {
    map: { html: "ejs" },
});

export default async function index(ctx) {
    const body = await render("index");
    ctx.body = instantTheme.header+body+instantTheme.footer;
}
