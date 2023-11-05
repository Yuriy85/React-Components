import axios from 'axios';

export const getShips = async (
  pageUrl = 'https://swapi.dev/api/starships/'
) => {
  const result = await axios.get(pageUrl);
  return result.data.results;
};

export type ShipType = {
  MGLT?: string;
  cargo_capacity?: string;
  consumables?: string;
  cost_in_credits?: string;
  created?: string;
  crew?: string;
  edited?: string;
  films?: string[];
  hyperdrive_rating?: string;
  length: string;
  manufacturer?: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots?: string[];
  starship_class?: string;
  url?: string;
};
