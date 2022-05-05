//get the Koa
const Koa = require("koa");
//get new koa instance
const app = new Koa();
//import koa-router
const KoaRouter = require("koa-router");
const router = new KoaRouter();
//get koa bodyparser
const bodyParser = require("koa-bodyparser");
//set port
const port = 5000;
//use bodyparser as middleware
app.use(bodyParser());


//middleware for allow all routes and methods
app.use(router.routes()).use(router.allowedMethods());
//listener
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
