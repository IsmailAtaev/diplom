const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: "node.react@mail.ru",
        pass: "Af3ipjFt4gF0zn3PsRvJ",
      },
    });
  }

  async sendActivationMail(to, link) {
    console.log("isma activationLink: " + link);
    console.log("EMAIL: " + to);

    await this.transporter.sendMail({
      from: "node.react@mail.ru",
      to,
      subject: "Activation account on " + process.env.API_URL,
      text: "",
      html: ` 
          <div>
            <h1>Для активации перейдите по ссылке</h1>
            <a href="${link}">${link}</a>
          </div>`,
    });
  }
}

module.exports = new MailService();
