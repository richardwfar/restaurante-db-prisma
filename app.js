import express from "express"

import routes from "./src/routes.js"

import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, ".", "src", "views"))

app.use(express.static(path.join(__dirname, ".", "src", "public")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(3333, () => {
    console.log("Running server on port 3333")
})