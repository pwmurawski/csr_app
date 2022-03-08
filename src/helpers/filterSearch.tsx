interface ICountries {
  name: string;
  code: string;
  continent: {
    code: string;
  };
}

const filterSearch = (
  search: string,
  select: string,
  countriesData: ICountries[]
): ICountries[] => {
  return countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.continent.code.includes(select)
  );
};

export default filterSearch;
