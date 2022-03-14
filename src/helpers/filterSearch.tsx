import { ICountriesData } from "../interfaces/interfaces";

const filterSearch = (
  search: string,
  select: string,
  countriesData: ICountriesData[]
): ICountriesData[] => {
  return countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.continent.code.includes(select)
  );
};

export default filterSearch;
