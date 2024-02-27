import { containsKey, getData, removeItem, storeData } from ".";
import data from "../data/data.json";
import { Workout } from "../types/data";

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData("workout-app");
  return workouts;
};

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKey("workout-app");
  if (!hasWorkouts) {
    await storeData("workout-app", data);
    return true;
  }
  return false;
};
export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
  const workouts = await getWorkouts();
  const workout = workouts.filter((w) => w.slug === slug)[0];
  return workout;
};

export const clearWorkouts = async () => {
  await removeItem("workout-app");
};
