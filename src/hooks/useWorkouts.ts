import { useEffect, useState } from "react";
import { Workout } from "../types/data";
import { getWorkouts } from "../storage/workout";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    async function getData() {
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }
    getData();
  }, []);
  return workouts;
};
