import { Code, Container, Name } from "./styles/CountryCardStyles";

interface ICountryProps {
  name: string;
  code: string;
}

export default function CountryCard({ name, code }: ICountryProps) {
  return (
    <Container to={`/${code}`}>
      <Name>{name}</Name>
      <Code>{code}</Code>
    </Container>
  );
}
