import { useState, useEffect } from "react";
import { Skeleton, NoContent } from "@/components/Meta";
import AxieCard from "./AxieCard";

export default function AxiesList({ ronin }) {
  const [axies, setAxies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`/api/axie-infinity/${ronin}`)
      .then((res) => res.json())
      .then((data) => {
        setAxies(data.results);
        setIsLoading(false);
      });
  }, []);

  if (!axies) return <NoContent>No hay información de los axies</NoContent>;

  return (
    <div className='bg-gradient-to-b from-gray to-transparent rounded-xl mt-10 py-7 px-10'>
      <h3 className='text-3xl font-medium tracking-wide'>Axies</h3>
      <div className='grid grid-flow-row md:grid-cols-3 gap-20'>
        {isLoading
          ? [...Array(3).keys()].map((index) => (
              <Skeleton key={index} type='axie' />
            ))
          : axies.map((axie) => (
              <AxieCard key={axie.id} {...axie}>
                {axie.name}
              </AxieCard>
            ))}
      </div>
    </div>
  );
}
