const express = require('express')
const nodemailer = require('nodemailer')

const server = express()
const PORT = 3000

server.use(express.static(__dirname + '/public'))
server.use(express.json())

server.get("/", (req, res) => {
    res.sendFile("public/index.html", { root: __dirname });
})

server.post("/api/feedback", async (req, res) => {

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
            auth: {
                user: "meirzhan.zhantis@bk.ru",
                pass: "gq2vUYp6sfUUQckZneG4"
            }
        })

        const {name, phone, message} = req.body

        await transporter.sendMail({
            from: "meirzhan.zhantis@bk.ru",
            to: "meirzhan.zhantis@bk.ru",
            subject: "them",
            text: `${name} ${phone} ${message}`
        })

        return res.status(200).send({
            status: 200,
            message: 'accepted'
        })

    }catch{
        return res.status(500).send({
            status: 500,
            message: 'error in request'
        })
    }
})

server.listen(PORT, () =>[
    console.log(`listening port: ${PORT}`)
])