import { prisma } from "../../models/prismaClient.js"

export const createUser = async (req, res) => {
    const { 
        name, 
        cpf, 
        phone, 
        email, 
        street,
        number,
        add_info,
        neighborhood,
        city,
        cep 
    } = req.body

    try {
        const user = await prisma.user.create({
            data: {
                name,
                cpf,
                phone,
                email,
                street,
                number,
                add_info,
                neighborhood,
                city,
                cep
            }
        })

        res.status(200).json(user)
    } catch(error) {
        console.log(error)
        res.status(400).json({ error:"Erro ao tentar cadastrar usuário" })
    }
}