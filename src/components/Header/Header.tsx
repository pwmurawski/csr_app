import { ReactElement } from "react";
import { Container, SelectContainer } from "./styles/HeaderStyles";

interface IHeaderProps {
  searchBar: ReactElement;
  select: ReactElement;
}

export default function Header({ searchBar, select }: IHeaderProps) {
  return (
    <Container>
      {searchBar}
      <SelectContainer>{select}</SelectContainer>
    </Container>
  );
}
