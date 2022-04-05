import { useContext, useState, useEffect } from "react";
import StatsContext from "@/contexts/stats.context";

export default function Button({ children }) {
  return (
    <div className='flex flex-row gap-3 text-sm text-white'>{children}</div>
  );
}

Button.Item = function ButtonItem({ children, type }) {
  const { option, setOption } = useContext(StatsContext);
  const [active, setActive] = useState("default");

  useEffect(() => {
    setActive(option === type);
  }, [option, type]);

  return (
    <div
      className={`${
        active ? "bg-selected" : "bg-gray"
      } py-1 px-2 text-base  rounded-lg drop-shadow-lg hover:bg-selected hover:drop-shadow-sm hover:cursor-pointer`}
    >
      <a href='#charts' onClick={() => setOption(type)}>
        {children}
      </a>
    </div>
  );
};
