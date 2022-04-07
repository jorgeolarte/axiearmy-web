import { useState, useEffect } from "react";

export default function useTrainers() {
  const SORT_ASC = "sort_asc";
  const SORT_DESC = "sort_desc";
  const SORT_DEFAULT = "sort_default";

  const [trainers, setTrainers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sort, setSort] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`/api/trainers/`)
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setIsLoading(false);
      });
  }, []);

  const sortBySlp = () => {
    const sorted = [...trainers].sort((a, b) => {
      return b.slp - a.slp;
    });

    setTrainers(!sort ? sorted : sorted.reverse());
    setSort(!sort);
  };

  return { isLoading, trainers, sort, sortBySlp };
}
