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

//data array
var data = [
  { id: 1, itemName: "Book", price: 100, qty: 50, promo: "None" },
  { id: 2, itemName: "Pen", price: 20, qty: 100, promo: "None" },
  { id: 3, itemName: "Pencil", price: 10, qty: 100, promo: "None" },
];

//user array
var Users = [
  {
    id: 1,
    type: "Customer",
    name: "Thameera",
    email: "sith@gmail.com",
    phone: "0778240162",
  },
  {
    id: 2,
    type: "Customer",
    name: "Poorna",
    email: "poo@gmail.com",
    phone: "0778240162",
  },
  {
    id: 3,
    type: "Trader",
    name: "Dilupa",
    email: "dilu@gmail.com",
    phone: "0778240162",
  },
];

//wish list
var wishList = [];

//cart array
var cart = [];

//read data
const read = async (ctx) => {
  ctx.body = data;
};

//create data
const add = async (ctx) => {
  var uin = ctx.request.body;
  var newItem = { ...uin, promo: "None" };
  data.push(newItem);
  ctx.body = data;
};

// update data
const update = async (ctx) => {
  let uin = ctx.request.body;
  const newArray = data.filter((item) => {
    if (item.id != uin.id) {
      return item;
    }
  });
  data = [...newArray, uin];
  ctx.body = data;
};

// delete data
const deleteData = async (ctx) => {
  let uin = ctx.request.body;
  const newArray = data.filter((item) => {
    if (item.id !== uin.id) {
      return item;
    }
  });
  data = newArray;
  ctx.body = data;
};

//create profile
const createProfile = (ctx) => {
  const user = ctx.request.body;
  const userId = new Date().getTime().toString();
  const newUser = { ...user, id: userId };
  Users.push(newUser);
  ctx.body = Users;
};
//get users
const getUsers = (ctx) => {
  const customers = Users.filter((person) => {
    if (person.type === "Customer") {
      return person;
    }
  });
  ctx.body = customers;
};

//routes

//items routes
router.get("/getData", read);
router.post("/add", add);
router.put("/update", update);
router.delete("/delete", deleteData);
//create profile route
router.post("/createProfile", createProfile);
//get users
router.get("/getUsers", getUsers);

//middleware for allow all routes and methods
app.use(router.routes()).use(router.allowedMethods());
//listener
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
