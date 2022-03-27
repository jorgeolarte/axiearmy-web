import { useState } from "react";
import { AsideBar, AdminBar } from "@/components/Navs";
import AdminLayout from "./Admin.compound";
import ToggleContext from "@/components/Navs/admin/toggle.context";

export default function Admin({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen }}>
      <AdminLayout>
        <AsideBar />
        <AdminLayout.Main>
          <AdminBar />
          <AdminLayout.Container>{children}</AdminLayout.Container>
        </AdminLayout.Main>
      </AdminLayout>
    </ToggleContext.Provider>
  );
}
