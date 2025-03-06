import { Router } from "express"
import { upload } from "../config/multerConfig.js"

import { getUsers } from "./controllers/users/getUsersController.js"
import { createUser } from "./controllers/users/createUserController.js"
import { updateUser } from "./controllers/users/updateUserController.js"
import { deleteUser } from "./controllers/users/deleteUserController.js"

import { createFood } from "./controllers/foods/createFoodController.js"
import { getFoods } from "./controllers/foods/getFoodsController.js"

import { createOrder } from "./controllers/orders/createOrderController.js"
import { getOrders } from "./controllers/orders/getOrdersController.js"

const routes = Router()

routes.get("/", (req, res) => {
    res.send("Sir. Frango ⚔️")
})

routes.get("/users", getUsers)
routes.get("/form", (req, res) => {
    res.render("userForm")
})
routes.post("/create", createUser)
routes.put("/users", updateUser)
routes.delete("/users", deleteUser)

routes.get("/foods", getFoods)
routes.get("/food-form", (req, res) => {
    res.render("foodForm")
})
routes.post("/create-food", upload.single("image"), createFood)

routes.post("/orders", createOrder)
routes.get("/orders", getOrders)

export default routes