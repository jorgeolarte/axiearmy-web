import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleOpen };
}
