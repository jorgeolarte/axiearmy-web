import { createContact } from "@/helpers/sendinblue";

export default async function handler(req, res) {
  const { fields } = req.body.data;

  let subscriber = fields.find((index) => index.key === "question_nW5o2v");

  // Validar si quiere suscribirse
  if (subscriber.value === "a48e858b-4e6a-4399-a94d-506a7feac067") {
    // Obtener el correo, nombre y telefono
    let name = fields.find((index) => index.key === "question_wvYaVl").value;
    let phone = fields.find((index) => index.key === "question_mK14AX").value;
    let email = fields.find((index) => index.key === "question_wLpjBl").value;

    let result = await createContact(name, phone, email);

    if (result) {
      return res.status(200).json({ message: "ok" });
    }
  }

  return res.status(400).json({ message: "no user subscriber" });
}
