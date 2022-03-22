import { useState } from "react";
import { AsideBar, AdminBar } from "@/components/Navs";
import useLayout from "@/hooks/use-layout.hook";
import ToggleContext from "@/components/Navs/admin/toggle.context";

export default function Index() {
  const { Layout } = useLayout({ type: "admin" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout>
        <AsideBar />
        {/* Main content */}
        <Layout.Main>
          {/* mobile menu */}
          <AdminBar />
          {/* content */}
          <Layout.Container>
            Hola mundo {isOpen ? "true" : "false"}
          </Layout.Container>
        </Layout.Main>
      </Layout>
    </ToggleContext.Provider>
  );
}
