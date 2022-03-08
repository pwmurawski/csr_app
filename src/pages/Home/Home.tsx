import { useQuery } from "@apollo/client";
import Select from "react-select";
import { useState } from "react";
import Container from "./styles/HomeStyles";
import CountriesCard from "../../components/CountriesCard/CountriesCard";
import LoadingIcon from "../../components/UI/LoadingIcon";
import ErrorInfo from "../../components/ErrorInfo/ErrorInfo";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import filterSearch from "../../helpers/filterSearch";
import { GET_CONTINENTS, GET_COUNTRIES } from "../../queries/queries";

interface IContinentsData {
  continents: {
    code: string;
    name: string;
  }[];
}

interface ICountriesData {
  countries: {
    name: string;
    code: string;
    continent: {
      code: string;
    };
  }[];
}

export default function Home() {
  const countries = useQuery<ICountriesData>(GET_COUNTRIES);
  const continents = useQuery<IContinentsData>(GET_CONTINENTS);
  const options = continents.data?.continents.map(({ code, name }) => ({
    value: code,
    label: name,
  }));
  const [searchVal, setSearchVal] = useState("");
  const [selectVal, setSelectVal] = useState("");

  if (countries.loading) return <LoadingIcon />;
  if (countries.error) return <ErrorInfo message={countries.error?.message} />;
  if (!countries.data) return null;

  return (
    <>
      <Header
        searchBar={<SearchBar onSearch={(e) => setSearchVal(e)} />}
        select={
          <Select
            isClearable
            options={options}
            onChange={(e) => setSelectVal(e?.value ?? "")}
          />
        }
      />
      <Container>
        <CountriesCard
          countriesData={filterSearch(
            searchVal,
            selectVal,
            countries.data.countries
          )}
        />
      </Container>
    </>
  );
}
