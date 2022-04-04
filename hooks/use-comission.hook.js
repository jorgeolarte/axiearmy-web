import { useState, useEffect } from "react";

export default function useComission({ slp }) {
  const [comission, setComission] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (slp) {
      fetch(`/api/academy/comissions/${slp}`)
        .then((res) => res.json())
        .then((data) => {
          setComission({ ...data });
          setIsLoading(false);
        });
    }
  }, [slp]);

  return { isLoading, comission };
}
