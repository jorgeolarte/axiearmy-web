import { useState, useEffect } from "react";

export default function useGoal({ slp, avg }) {
  const [goal, setGoal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const calcGoal = () => {
      return slp + avg * daysOfMonth();
    };

    const daysOfMonth = () => {
      let today = new Date();
      let todayNumber = today.getDate();
      let lastDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      );

      let leftDays =
        todayNumber <= 15
          ? 15 - todayNumber
          : lastDayOfMonth.getDate() - todayNumber;

      return leftDays;
    };

    setGoal(calcGoal);
  }, [slp, avg]);

  return { isLoading, goal };
}
