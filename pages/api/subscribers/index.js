import { createContact } from "@/helpers/sendinblue";

const data = {
  eventId: "efc0c5d6-b368-4af8-9a51-f9c698e2c0f5",
  eventType: "FORM_RESPONSE",
  createdAt: "2022-04-22T12:23:32.210Z",
  data: {
    responseId: "nrpv02",
    submissionId: "nrpv02",
    respondentId: "mVYv8g",
    formId: "wAk1Dm",
    formName: "Inscripciones",
    createdAt: "2022-04-22T12:23:27.000Z",
    fields: [
      {
        key: "question_wvYaVl",
        label: "¿Cuál es tu nombre?",
        type: "INPUT_TEXT",
        value: "Prueba 3",
      },
      {
        key: "question_mK14AX",
        label:
          "Facilita un número en el cual nos podamos comunicar a través de Whatsapp",
        type: "INPUT_PHONE_NUMBER",
        value: "3017516045",
      },
      {
        key: "question_wLpjBl",
        label: "Proporciona un email personal que revises con regularidad.",
        type: "INPUT_EMAIL",
        value: "ingeniero@jorgeolarte.com",
      },
      {
        key: "question_3yYbbX",
        label: "Fecha de nacimiento",
        type: "INPUT_DATE",
        value: "2022-04-01",
      },
      {
        key: "question_nW5o2v",
        label:
          "¿Te gustaría suscribirte a nuestro boletín de noticias que te llegará a través del correo electrónico? ",
        type: "MULTIPLE_CHOICE",
        value: "a48e858b-4e6a-4399-a94d-506a7feac067",
        options: [
          {
            id: "a48e858b-4e6a-4399-a94d-506a7feac067",
            text: "Si, me gustaría",
          },
          {
            id: "74e92f0a-21c2-447b-ae41-c8fdc6a3fa33",
            text: "No, no quiero",
          },
        ],
      },
      {
        key: "question_wQVqqX",
        label: "¿A qué te dedicas en este momento de tu vida?",
        type: "MULTIPLE_CHOICE",
        value: "f84995a1-2fc2-4890-9949-8f80c6f3638f",
        options: [
          {
            id: "f84995a1-2fc2-4890-9949-8f80c6f3638f",
            text: "Estudiante colegio",
          },
          {
            id: "6558a0ca-0395-4283-a462-f74fa71bf6df",
            text: "Estudiante universitario",
          },
          {
            id: "822432eb-0344-470f-8a7a-9981ba700dcc",
            text: "Desempleado",
          },
          {
            id: "2d0f9a4c-4f74-46d4-840a-be55ba916e30",
            text: "Empleado",
          },
        ],
      },
      {
        key: "question_nWz66k",
        label: "¿Con cuales de estos elementos de conectividad cuentas?",
        type: "CHECKBOXES",
        value: ["e6dc0e40-722d-4237-a952-6458bb246b10"],
        options: [
          {
            id: "e6dc0e40-722d-4237-a952-6458bb246b10",
            text: "Internet hogar",
          },
          {
            id: "ccf765ef-6565-4c4a-a102-7fe8ab31c4b8",
            text: "Plan de datos celular",
          },
          {
            id: "5815c278-43c1-4c90-8fb5-2275a7056a26",
            text: "Computador de escritorio / Portátil",
          },
          {
            id: "da5eb845-d927-4076-8708-ad1942ea88a7",
            text: "Celular",
          },
        ],
      },
      {
        key: "question_nWz66k_e6dc0e40-722d-4237-a952-6458bb246b10",
        label:
          "¿Con cuales de estos elementos de conectividad cuentas? (Internet hogar)",
        type: "CHECKBOXES",
        value: true,
      },
      {
        key: "question_nWz66k_ccf765ef-6565-4c4a-a102-7fe8ab31c4b8",
        label:
          "¿Con cuales de estos elementos de conectividad cuentas? (Plan de datos celular)",
        type: "CHECKBOXES",
        value: false,
      },
      {
        key: "question_nWz66k_5815c278-43c1-4c90-8fb5-2275a7056a26",
        label:
          "¿Con cuales de estos elementos de conectividad cuentas? (Computador de escritorio / Portátil)",
        type: "CHECKBOXES",
        value: false,
      },
      {
        key: "question_nWz66k_da5eb845-d927-4076-8708-ad1942ea88a7",
        label:
          "¿Con cuales de estos elementos de conectividad cuentas? (Celular)",
        type: "CHECKBOXES",
        value: false,
      },
      {
        key: "question_wad11X",
        label: "¿Qué sistema operativo tiene tu celular?",
        type: "MULTIPLE_CHOICE",
        value: "25d90807-c293-43b3-ae0f-fd61d5003de1",
        options: [
          {
            id: "25d90807-c293-43b3-ae0f-fd61d5003de1",
            text: "Android",
          },
          {
            id: "5b2767d4-e3e6-48ae-b776-2ffffffe2ec9",
            text: "IOS (Iphone)",
          },
          {
            id: "ec13ca59-e538-4def-83e8-41a0554946e5",
            text: "Otro",
          },
        ],
      },
      {
        key: "question_nGlVEk",
        label: null,
        type: "FILE_UPLOAD",
        value: [
          {
            id: "waePGX",
            name: "Axie-Army---Editable.png",
            url: "https://storage.googleapis.com/tally-response-assets/Bkl8LN/c225529b-6c61-47b0-9243-a2e0a74428ef/Axie-Army---Editable.png",
            mimeType: "image/png",
            size: 213122,
          },
        ],
      },
      {
        key: "question_w2NXqM",
        label: null,
        type: "FILE_UPLOAD",
        value: [
          {
            id: "w7bgZ0",
            name: "Axie-Army---Editable.png",
            url: "https://storage.googleapis.com/tally-response-assets/Bkl8LN/35b9d5bf-3c2f-4760-a407-71e25cdb63a1/Axie-Army---Editable.png",
            mimeType: "image/png",
            size: 213122,
          },
        ],
      },
      {
        key: "question_mOGZqg",
        label: "¿Cuántos años de experiencia tienes como jugador?",
        type: "MULTIPLE_CHOICE",
        value: "9f61e085-1b45-4a0e-b9ba-f41da138230b",
        options: [
          {
            id: "9f61e085-1b45-4a0e-b9ba-f41da138230b",
            text: "Nunca he jugado en mi vida",
          },
          {
            id: "26a47a7c-288b-442c-9d47-fb8eb1212150",
            text: "Menos de 1 año",
          },
          {
            id: "3a2d590a-adfe-43e7-a1c5-3dbfffb694d4",
            text: "De 1 a 3 años",
          },
          {
            id: "c1d66fbe-fe77-4363-836d-e74bbc9f6126",
            text: "De 3 a 5 años",
          },
          {
            id: "9858d2aa-5b97-492b-afef-55891be799a1",
            text: "Más de 5 años",
          },
        ],
      },
      {
        key: "question_3EWGVr",
        label:
          "Indícanos cuales juegos que haz jugado, te servirán como experiencia para adentrarte en el mundo de Axie Infinity y dinos por qué",
        type: "TEXTAREA",
        value: "gfdsgsdg ertgdsvgfgd",
      },
    ],
  },
};

export default async function handler(req, res) {
  const { fields } = data.data;

  let subscriber = fields.find((index) => index.key === "question_nW5o2v");
  // Validar si quiere suscribirse
  if (subscriber.value === "a48e858b-4e6a-4399-a94d-506a7feac067") {
    // Obtener el correo, nombre y telefono
    let name = fields.find((index) => index.key === "question_wvYaVl").value;
    let phone = fields.find((index) => index.key === "question_mK14AX").value;
    let email = fields.find((index) => index.key === "question_wLpjBl").value;

    await createContact(name, phone, email);
  }
  // Crear contacto en sendinblue y agregarlo a lista
  res.status(200).json(fields);
}
