import { useState, useEffect } from "react";
import Link from "next/link";

export default function Academy() {
  const [trainers, setTrainers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/trainers")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setTrainers(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className='flex justify-center items-center mx-auto'>
      <div>
        <h1 className='text-7xl'>Entrenadores</h1>
        {trainers.map((trainer) => (
          <div key={trainer.ronin}>
            <Link href={`/academy/${trainer.ronin}`}>
              <a>
                {trainer.name} | {trainer.team}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
