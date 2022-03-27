import { useState, useEffect } from "react";

export default function useComissions() {
  const [comissions, setComissions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("/api/academy/comissions")
      .then((res) => res.json())
      .then((data) => {
        setComissions(data);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, comissions };
}
