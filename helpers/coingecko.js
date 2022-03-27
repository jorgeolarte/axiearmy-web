const COINS = ["smooth-love-potion", "axie-infinity", "ronin", "ethereum"];

export async function getCoins() {
  let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${encodeURIComponent(
    COINS
  )}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  let coins = await fetch(url).then((result) => result.json());

  return coins;
}

export async function getSlpPrice() {
  let url = `https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=usd`;

  let slp = await fetch(url).then((result) => result.json());

  return slp["smooth-love-potion"];
}
