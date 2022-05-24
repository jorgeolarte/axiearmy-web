export async function createContact(name, phone, email) {
  const url = "https://api.sendinblue.com/v3/contacts";
  const data = JSON.stringify({
    attributes: {
      NOMBRE: `${name}`,
      // APELLIDOS: "Vanegas",
      SMS: `57${phone}`,
    },
    listIds: [8],
    updateEnabled: true,
    email: `${email}`,
    emailBlacklisted: false,
    smsBlacklisted: false,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": `${process.env.SENDINBLUE_API_KEY}`,
      "Access-Control-Allow-Origin": "*",
    },
    body: data,
  });

  return response.status === 204 || response.status === 201;
}

export async function createContactByNewsletter(fname, lname, email) {
  const url = "https://api.sendinblue.com/v3/contacts";
  const data = JSON.stringify({
    attributes: {
      NOMBRE: `${fname}`,
      APELLIDOS: `${lname}`,
    },
    listIds: [8],
    updateEnabled: true,
    email: `${email}`,
    emailBlacklisted: false,
    smsBlacklisted: false,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": `${process.env.SENDINBLUE_API_KEY}`,
      "Access-Control-Allow-Origin": "*",
    },
    body: data,
  });

  return response.status === 204 || response.status === 201;
}
