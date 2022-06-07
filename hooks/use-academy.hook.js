import { useState, useEffect } from "react";

export default function useAcademy() {
  const [isLoading, setIsLoading] = useState(false);
  const [amountSLP, setAmountSLP] = useState(0);
  const [leftDays, setLeftDays] = useState(0);

  useEffect(() => {
    function updateAcademy() {
      setIsLoading(true);

      fetch("/api/academy/")
        .then((res) => res.json())
        .then((res) => {
          setAmountSLP(res[0].totalSlp);
          setIsLoading(false);
        });
    }

    return updateAcademy();
  }, []);

  useEffect(() => {
    function updateDays() {
      const daysOfMonth = () => {
        let today = new Date();
        let todayNumber = today.getDate();
        let lastDayOfMonth = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          0
        );

        // let leftDays =
        //   todayNumber <= 15
        //     ? 15 - todayNumber
        //     : lastDayOfMonth.getDate() - todayNumber;

        let leftDays = lastDayOfMonth.getDate() - todayNumber;

        return leftDays;
      };
      setLeftDays(daysOfMonth);
    }

    return updateDays();
  }, []);

  return { isLoading, amountSLP, leftDays };
}
