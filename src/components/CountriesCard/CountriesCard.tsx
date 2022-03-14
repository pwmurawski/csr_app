import CountryCard from "./CountryCard/CountryCard";
import Container from "./styles/CountriesCardStyles";

interface ICountriesProps {
  countriesData: {
    name: string;
    code: string;
  }[];
}

export default function CountriesCard({ countriesData }: ICountriesProps) {
  if (!countriesData.length) return <h2>No results</h2>;

  return (
    <Container>
      {countriesData.map(({ name, code }) => (
        <CountryCard key={code} name={name} code={code} />
      ))}
    </Container>
  );
}
