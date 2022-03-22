import { useState } from "react";
import { AsideBar, AdminBar } from "@/components/Navs";
import Layout from "@/components/Layout/Layout";
import ToggleContext from "@/components/Navs/admin/toggle.context";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen }}>
      <Layout type='admin'>
        <AsideBar />
        {/* Main content */}
        <div className='flex-1'>
          {/* mobile menu */}
          <AdminBar />
          {/* content */}
          <div className='container'>
            Hola mundo {isOpen ? "true" : "false"}
          </div>
        </div>
      </Layout>
    </ToggleContext.Provider>
  );
}
