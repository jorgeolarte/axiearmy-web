import { useState, useEffect } from "react";
import { Skeleton } from "@/components/Meta";
import { Axie } from "@/components/Compounds";

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
  }, [ronin]);

  return (
    <Axie>
      {isLoading
        ? [...Array(3).keys()].map((index) => (
            <Skeleton key={index} type='axie' />
          ))
        : axies.map((axie) => (
            <Axie.Card key={axie.id} {...axie}>
              <Axie.Image id={axie.id} name={axie.name} image={axie.image} />
              <Axie.Class>{axie.class}</Axie.Class>
              <Axie.Stats>
                <Axie.Stat
                  image='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/salud_v7odyc.png'
                  stat={axie.stats.hp}
                />
                <Axie.Stat
                  image='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/velocidad_qkxfsw.png'
                  stat={axie.stats.speed}
                />
                <Axie.Stat
                  image='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/skill_gyakd8.png'
                  stat={axie.stats.skill}
                />
                <Axie.Stat
                  image='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/mora_xshoqf.png'
                  stat={axie.stats.morale}
                />
              </Axie.Stats>
            </Axie.Card>
          ))}
    </Axie>
  );
}
