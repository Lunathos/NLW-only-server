import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d0494e280ed4e2",
      pass: "c0d2a47786ce11"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
      await transport.sendMail({
            from: 'Equipe Deeget <oi@Deeget.com>',
            to: 'Davi Carvalho <ivadcgs1999@gmail.com>',
            subject: subject,
            html: body,
        });
    };
}