import { Languages, List, ListItem } from "./styles/LanguagesListStyles";

interface ILanguagesProps {
  languagesData: {
    name: string;
  }[];
}

export default function LanguagesList({ languagesData }: ILanguagesProps) {
  return (
    <List>
      <Languages>Languages:</Languages>
      {languagesData.map(({ name }) => (
        <ListItem key={name}>{name}</ListItem>
      ))}
    </List>
  );
}
