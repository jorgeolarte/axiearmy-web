import { useState, useEffect } from "react";

export default function useComission({ slp }) {
  const [comission, setComission] = useState([]);
  const [scholarship, setScholarship] = useState(6);
  const [investor, setInvestor] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (slp) {
      fetch(`/api/academy/comissions/${slp}`)
        .then((res) => res.json())
        .then((data) => {
          setComission({ ...data });
          setInvestor(94 - data.percent);
          setIsLoading(false);
        });
    }
  }, [slp]);

  return { isLoading, comission, scholarship, investor };
}
