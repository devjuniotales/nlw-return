import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f988c3bfc9eedb",
      pass: "3a47ceb0c05007"
    }
  });

export class NodemailerMailAdapter  implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
        from : "Equipe Feedget <oi@feedget.com>",
        to : "Teste Fernandes <teste@gmail.com>",
        subject :  subject,
        html : body
    })

    }

}