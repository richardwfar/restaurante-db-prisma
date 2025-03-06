import { prisma } from "../../models/prismaClient.js"

export const getFoods = async (req, res) => {
    try {
        const foods = await prisma.food.findMany()
        
        res.render("foods", { foods })
    } catch(error) {
        console.log(error)
        res.status(400).json({ error:"Ocorreu um erro ao tentar buscar todos os pratos!" })
    }
}