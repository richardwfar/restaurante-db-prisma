import { prisma } from "../../models/prismaClient.js"

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.render("users", { users })
    } catch(error) {
        res.status(400).json({ error:"Erro ao buscar usuários" })
    }
}