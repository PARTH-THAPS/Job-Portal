import Express from 'express';
import ejsLayout from 'express-ejs-layouts';
import path from "path";
import {login} from "./src/controllers/productController.js";
import {loginUser}  from "./src/controllers/userController.js";
import {defaultRegister} from  "./src/controllers/userController.js";



const server=Express();
 server.use(Express.urlencoded({extended:true}));
 server.use(Express.json());
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(),'src','views'));
server.use(ejsLayout);
server.use(Express.static('public'));
server.get('/',login);
server.post("/login",loginUser);
server.get('/register',defaultRegister);



server.listen('3030',()=>{
console.log("servers listening at 3030");
});