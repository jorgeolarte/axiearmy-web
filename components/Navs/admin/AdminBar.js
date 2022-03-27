import Admin from "./Admin.compound";

export default function AdminBar() {
  return (
    <Admin>
      <Admin.Burger />
      <Admin.Logo />
      <Admin.Session>Iniciar sesión</Admin.Session>
    </Admin>
  );
}
