export interface ICountriesData {
  name: string;
  code: string;
  continent: {
    code: string;
  };
}

export interface ICountriesAndContinentsData {
  countries: ICountriesData[];
  continents: {
    code: string;
    name: string;
  }[];
}

export interface ICountryData {
  country: {
    name: string;
    languages: {
      name: string;
    }[];
    code: string;
    emoji: string;
  };
}
