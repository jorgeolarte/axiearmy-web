import { useState, useEffect } from "react";

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
          <p key={trainer.ronin}>
            {trainer.name} | {trainer.team}
          </p>
        ))}
      </div>
    </div>
  );
}
