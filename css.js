const Koa = require('koa');
const serve = require('koa-static');

const css = new Koa();

css.use(serve(`${__dirname}/src`));
css.listen(1340);

module.exports = css;
