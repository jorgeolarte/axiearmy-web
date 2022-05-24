import { useState } from "react";

const initialState = {
  isOpen: false,
  type: process.env.MODAL_NEWSLETTER_TYPE,
};

export default function useModal() {
  const [modal, setModal] = useState(initialState);

  const toggleModal = (option) => {
    setModal((modal) => ({ isOpen: !modal.isOpen, type: option }));
  };

  return {
    modal,
    toggleModal,
  };
}
