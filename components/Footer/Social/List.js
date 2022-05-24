import Item from "./Item";

const socialNetworks = [
  {
    name: "Instagram",
    iconUrl:
      "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631882/web/icons/Instagram_qpz2b3.png",
    link: "https://instagram.com/axiearmy.gg",
    width: 30,
    height: 30,
  },
  {
    name: "Discord",
    iconUrl:
      "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631882/web/icons/discord_jh7erp.png",
    link: "https://discord.gg/JT2hgf3aKG",
    width: 30,
    height: 22,
  },
  {
    name: "Linkedin",
    iconUrl:
      "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631882/web/icons/Linkedin_pgv7hz.png",
    link: "https://www.linkedin.com/company/axie-army/",
    width: 30,
    height: 30,
  },
];

export default function List() {
  return (
    <div className='grid grid-flow-col place-content-start gap-3 items-center'>
      {socialNetworks.map((network) => (
        <Item key={network.name} {...network} />
      ))}
    </div>
  );
}
