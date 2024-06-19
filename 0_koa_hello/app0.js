const Koa = require('koa');
const app = new Koa();

// ミドルウェアの設定
app.use(async ctx => {
    ctx.body = 'Hello Koa';
});

// サーバーをポート3000で起動
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
