import { prisma } from "../../models/prismaClient.js"

export const createOrder = async (req, res) => {
    const { userId, amountTotal, status } = req.body
    try {
        const order = await prisma.order.create({
            data: {
                amountTotal,
                status,
                users: {
                    connect: {
                        id: userId
                    }
                }
            }
        })

        res.status(200).json(order)
    } catch(error) {
        console.log(error)
        res.status(400).json({ error:"Ocorreu um erro ao tentar criar o pedido" })
    }
}