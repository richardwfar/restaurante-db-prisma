import { prisma } from "../../models/prismaClient.js"
import cloudinary from "../../../config/cloudinaryConfig.js"
import { createReadStream } from "streamifier"

export const createFood = async (req, res) => {
    const {  
        name,
        desc,
        price,
        category,
        stock
    } = req.body

    const file = req.file

    try {
        const uploadResult = cloudinary.uploader.upload_stream(
            { resource_type: "auto" },
            async (error, result) => {
                if(error) {
                    return res.status(400).send("Erro ao enviar arquivo!")
                }

                const imageUrl = result.secure_url
                console.log(prisma)
                const food = await prisma.food.create({
                    data: {
                        name,
                        desc,
                        price: Number(price),
                        category,
                        stock: Number(stock),
                        imageUrl
                    }
                })

                res.status(200).json(food)
            }
        )

        const stream = createReadStream(file.buffer)
        stream.pipe(uploadResult)  
    } catch(error) {
        console.log(error)
        res.status(400).json({ error:"Ocorreu um erro ao tentar cadastrar o produto" })
    }
}