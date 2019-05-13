const Koa = require('koa');
const serve = require('koa-static');
// const cacheControl = require('koa-cache-control');

const css = new Koa();

// css.use(
//   cacheControl({
//     maxAge: 3600,
//   }),
// );
css.use(serve(`${__dirname}/src`));
css.listen(1340);

module.exports = css;
