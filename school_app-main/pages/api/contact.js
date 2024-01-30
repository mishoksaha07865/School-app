import nodemailer from "nodemailer";
export default async function contact(req, res) {
    const {fname,email,text} = req.body;
    const data = {
        fname,email,text
    }
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        sucure:true,
        auth:{
            user:process.env.GMAIL,
            pass:process.env.GMAIL_PASSWORD,

        }
    });
    try{
        const mail= await transporter.sendMail({
            from: email,
            to:process.env.GMAIL,
            subject:`Contact Form submission from ${fname}`,
            html:`
                <p>Name:${fname}</p>
                <p>Email:${email}</p>
                <h2>Message:${text}</h2>
                 
            `
        });
        console.log("Message was sent:", mail.messageId, email   );
        return res.status(200).json({message:"success"})

    }catch(e){
        console.log(e);
        res.status(500).json({
            message:"Could Not Send The Email"
        })
    }
}