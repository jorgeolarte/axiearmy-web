import { useState, useEffect } from "react";

export default function useTrainer({ ronin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [trainer, setTrainer] = useState({});

  useEffect(() => {
    setIsLoading(true);

    fetch(`/api/trainers/${ronin}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setTrainer(data);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, trainer };
}
