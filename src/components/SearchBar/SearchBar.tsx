/* eslint-disable no-unused-vars */
import { useRef } from "react";
import SearchBarIcon from "../Svg/SearchBarIcon";
import { Container, Icon, Input } from "./styles/SearchBarStyles";

interface ISearchBarProps {
  onSearch: (searchValue: string) => void;
}

export default function SearchBar({ onSearch }: ISearchBarProps) {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputSearchRef.current?.focus();
  };

  return (
    <Container onClick={focusInput}>
      <Icon>
        <SearchBarIcon />
      </Icon>
      <Input
        ref={inputSearchRef}
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </Container>
  );
}
