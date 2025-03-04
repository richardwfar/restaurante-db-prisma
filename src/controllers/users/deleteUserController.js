import { prisma } from "../../models/prismaClient.js"

export const deleteUser = async (req, res) => {
    const { id } = req.body

    try {
        const user = await prisma.user.delete({
            where: {
                id: id
            }
        })

        res.status(200).json(user)
    } catch(error) {
        console.log(error)
        res.status(400).json({ error:"Ocorreu um erro ao tentar exluir usuário" })
    }
}