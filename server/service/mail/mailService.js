const nodemailer = require("nodemailer");
const path = require("path");

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

  async sendTicket(dirName, fileNme, to) {
    console.log("dirName", dirName);
    await this.transporter.sendMail({
      from: "node.react@mail.ru",
      to,
      // to: "arsi20010808@gmail.com", //"ataewisma@gmail.com",
      subject: "An Attached File",
      text: "Check out this attached pdf file",
      attachments: [
        {
          filename: filename + ".pdf",
          path: dirName,
          //"C:/Users/admin/Desktop/diplom/server/pdf/" + "file.pdf",
          //path: "C:/Users/admin/Desktop/diplom/server/pdf/file.pdf",
          //path: "C:/Users/Username/Desktop/somefile.pdf",
          //path: path.join(__dirname, '../output/file-name.pdf'),
          contentType: "application/pdf",
        },
      ],
      function(err, info) {
        if (err) {
          console.error(err);
        } else {
          console.log(info);
        }
      },
    });
  }
}

module.exports = new MailService();
