import productsRouter from "../modules/products/productsRouter";
import userRouter from "../modules/users/usersRouter";

const routers = require("express").Router();

routers.use("/user", userRouter
/* 
  #swagger.tags = ['User']
  
  #swagger.security = [{
            "bearerAuth": []
    }] 
*/
);
routers.use("/product", productsRouter
/* 
  #swagger.tags = ['Product']
  
  #swagger.security = [{
            "bearerAuth": []
    }] 
*/
);

export default routers
