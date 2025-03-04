import { prisma } from "../../models/prismaClient.js"

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch(error) {
        res.status(500).json({ error:"Erro ao buscar usuários" })
    }
}