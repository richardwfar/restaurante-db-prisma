import { prisma } from "../../models/prismaClient.js"

export const updateUser = async (req, res) => {
    const { id, email } = req.body
    try {
        const user = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                email: email
            }
        })

        res.status(200).json(user)
    } catch(error) {
        console.log(error)
        res.send(400).json({ error:"Ocorreu um erro ao tentar atualizar o usuário" })
    }
}