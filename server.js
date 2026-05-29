require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/gallery/:id", (req, res) => {
  res.render("gallery");
});

app.post("/contact", async (req, res) => {
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
});

app.listen(3000, () => {
  console.log("app listening at port 3k....");
});
