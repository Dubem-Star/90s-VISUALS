require("dotenv").config();
const nodemailer = require("nodemailer");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const { contactDetails } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_KEY,
      },
    });

    const mailStructure = {
      from: contactDetails.name,
      to: process.env.EMAIL,
      subject: `New mail from: ${contactDetails.name}`,
      text: contactDetails.message,
      replyTo: contactDetails.email,
    };

    await transporter.sendMail(mailStructure);

    res.status(200).json({ status: true, message: "mail sent successfully" });
    return;
  } catch (e) {
    console.log(`Error sending mail: ${e} `);
    res
      .status(500)
      .json({ status: false, message: "error sending mail, try again later" });
    return;
  }
};
