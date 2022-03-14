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
import { ICountriesAndContinentsData } from "../../interfaces/interfaces";
import { GET_COUNTRIES_AND_CONTINENTS } from "../../queries/queries";

export default function Home() {
  const { loading, error, data } = useQuery<ICountriesAndContinentsData>(
    GET_COUNTRIES_AND_CONTINENTS
  );
  const options = data?.continents.map(({ code, name }) => ({
    value: code,
    label: name,
  }));
  const [searchVal, setSearchVal] = useState("");
  const [selectVal, setSelectVal] = useState("");

  if (loading) return <LoadingIcon />;
  if (error) return <ErrorInfo message={error?.message} />;
  if (!data) return null;

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
          countriesData={filterSearch(searchVal, selectVal, data.countries)}
        />
      </Container>
    </>
  );
}
