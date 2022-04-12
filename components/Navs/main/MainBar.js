import Navbar from "./Navbar.compound";

export default function MainBar() {
  const menu = [
    {
      href: "quienes-somos",
      title: "¿Quienes somos?",
      type: "ref",
    },
    {
      href: "blog",
      title: "Blog",
      type: "link",
    },
    {
      href: "ranking",
      title: "Ranking",
      type: "ref",
    },
    {
      href: "entrenadores",
      title: "Entrenadores",
      type: "ref",
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfyWPUUl2bcN12hIjahGHNyq_LX4R3espI8oNXb3vby9T1pew/viewform?usp=sf_link",
      title: "¿Quieres ser entrenador?",
      type: "button",
    },
  ];

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Logo />
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Menu>
        <Navbar.List>
          {menu.map((item, index) => (
            <Navbar.ItemList key={index} type={item.type}>
              <Navbar.Item href={item.href}>{item.title}</Navbar.Item>
            </Navbar.ItemList>
          ))}
        </Navbar.List>
      </Navbar.Menu>
    </Navbar>
  );
}
