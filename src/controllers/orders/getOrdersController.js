import { prisma } from "../../models/prismaClient.js"

export const getOrders = async (req, res) => {
    try {
        const order = await prisma.order.findMany()

        res.status(200).json(order)
    } catch(error) {
        console.log(error)
        res.status(400).json({ error:"Ocorreu um erro ao tentar buscar todos os pedidos" })
    }
}