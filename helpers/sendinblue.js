export async function createContact(name, phone, email) {
  let url = "https://api.sendinblue.com/v3/contacts";
  let data = {
    attributes: { NOMBRE: "Mary", APELLIDOS: "Vanegas", SMS: "573007516045" },
    listIds: [8],
    updateEnabled: true,
    email: "elly@example.com",
    emailBlacklisted: false,
    smsBlacklisted: false,
  };

  console.log(data);

  await fetch(url, {
    method: "POST",
    headers: {
      //   Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": `${process.env.SENDINBLUE_API_KEY}`,
    },
    body: JSON.stringify(data),
  })
    .then((result) => result.json())
    .then((json) => console.log("result: ", json))
    .catch((err) => console.error("error:" + err.message));

  //   console.log(res);
}
