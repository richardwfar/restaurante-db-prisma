import express from "express"
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"
import routes from "./src/routes.js"

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, ".", "src", "views"))

app.use(express.static(path.join(__dirname, ".", "src", "public")))
/* app.use(express.static(path.join(__dirname, ".", "src", "views"))) */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(3333, () => {
    console.log("Running server on port 3333")
})