import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  Code,
  Container,
  Emoji,
  Name,
  Wrapper,
} from "./styles/CountryPageStyles";
import LanguagesList from "../../components/LanguagesList/LanguagesList";
import LoadingIcon from "../../components/UI/LoadingIcon";
import ErrorInfo from "../../components/ErrorInfo/ErrorInfo";
import { GET_COUNTRY } from "../../queries/queries";

interface ICountryData {
  country: {
    name: string;
    languages: {
      name: string;
    }[];
    code: string;
    emoji: string;
  };
}

export default function CountryPage() {
  const { code } = useParams();
  const { loading, error, data } = useQuery<ICountryData>(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <LoadingIcon />;
  if (error) return <ErrorInfo message={error?.message} />;
  if (!data) return null;

  return (
    <Wrapper>
      <Container>
        <Name>{data.country.name}</Name>
        <LanguagesList languagesData={data.country.languages} />
        <Code>{data.country.code}</Code>
        <Emoji>{data.country.emoji}</Emoji>
      </Container>
    </Wrapper>
  );
}
