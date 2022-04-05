function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export function formatDate(dating, type) {
  if (type === "year") {
    return [
      padTo2Digits(dating.getDate()),
      padTo2Digits(dating.getMonth() + 1),
      dating.getFullYear(),
    ].join("/");
  }
  return [
    padTo2Digits(dating.getMonth() + 1),
    padTo2Digits(dating.getDate()),
  ].join("/");
}
