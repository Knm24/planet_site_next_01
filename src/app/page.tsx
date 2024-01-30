import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

type PlanetItem = {
  id: string;
  name: string;
};

type PlanetsResponse = {
  count: number;
  data: PlanetItem[];
};

async function getData() {
  const response = await fetch(`http://localhost:8081/api/v1/planets/`);

  if (!response.ok) {
    await Promise.reject(new Error(`${response.status} - ${response.statusText}`));
  }
  const planets: PlanetsResponse = await response.json();

  return {
    planets,
  };
}

async function redirectToPlanet() {
  let planetsList = await getData();
  revalidatePath('/');
  redirect(`/${planetsList.planets.data[0].id}`);
}

export default redirectToPlanet;
