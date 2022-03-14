import { useQuery } from "@apollo/client";
import { useParams, Navigate } from "react-router-dom";
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
import { ICountryData } from "../../interfaces/interfaces";
import { GET_COUNTRY } from "../../queries/queries";

export default function CountryPage() {
  const { code } = useParams();
  const { loading, error, data } = useQuery<ICountryData, { code?: string }>(
    GET_COUNTRY,
    {
      variables: { code },
    }
  );

  if (loading) return <LoadingIcon />;
  if (error) return <ErrorInfo message={error?.message} />;
  if (!data?.country) return <Navigate to="/" />;

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
