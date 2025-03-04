import { Router } from "express"

import { getUsers } from "./controllers/users/getUsersController.js"
import { createUser } from "./controllers/users/createUserController.js"
import { updateUser } from "./controllers/users/updateUserController.js"
import { deleteUser } from "./controllers/users/deleteUserController.js"

import { createOrder } from "./controllers/orders/createOrderController.js"
import { getOrders } from "./controllers/orders/getOrdersController.js"

const routes = Router()

routes.get("/users", getUsers)
routes.post("/users", createUser)
routes.put("/users", updateUser)
routes.delete("/users", deleteUser)

routes.post("/orders", createOrder)
routes.get("/orders", getOrders)

export default routes