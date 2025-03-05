import { Router } from "express"
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"

import { getUsers } from "./controllers/users/getUsersController.js"
import { createUser } from "./controllers/users/createUserController.js"
import { updateUser } from "./controllers/users/updateUserController.js"
import { deleteUser } from "./controllers/users/deleteUserController.js"

import { createOrder } from "./controllers/orders/createOrderController.js"
import { getOrders } from "./controllers/orders/getOrdersController.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, ".", "views")))

const routes = Router()

routes.get("/", (req, res) => {
    res.send("Sir. Frango ⚔️")
})
routes.get("/users", getUsers)
routes.get("/users-form", (req, res) => {
    res.sendFile(path.join(__dirname, ".","views", "usersForm.ejs"))
})
routes.post("/create", createUser)
routes.put("/users", updateUser)
routes.delete("/users", deleteUser)

routes.post("/orders", createOrder)
routes.get("/orders", getOrders)

export default routes