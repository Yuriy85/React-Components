import axios from 'axios';

export const getShips = async (
  pageUrl = 'https://swapi.dev/api/starships/'
): Promise<ShipType[]> => {
  let results: ShipType[] = [];

  if (pageUrl === 'https://swapi.dev/api/starships/') {
    await axios
      .all([
        axios.get(pageUrl, { params: { page: 1 } }),
        axios.get(pageUrl, { params: { page: 2 } }),
        axios.get(pageUrl, { params: { page: 3 } }),
        axios.get(pageUrl, { params: { page: 4 } }),
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          results = [
            ...data1.data.results,
            ...data2.data.results,
            ...data3.data.results,
            ...data4.data.results,
          ];
        })
      );
  } else {
    results = (await axios.get(pageUrl)).data.results;
  }

  return results;
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
