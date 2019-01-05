const Koa = require('koa');
const cors = require('koa-cors');
const app = new Koa();
const router = require('./routers/index');

// const main = ctx => {
//     ctx.response.body = "Hello word"
// }

// app.use(main);
app.use(cors());
app.use(router.routes())
app.listen(3006);
console.log('app started at port 3006 ...');