import Error from "./styles/ErrorInfoStyles";

interface IErrorInfoProps {
  message: string;
}

export default function ErrorInfo({ message }: IErrorInfoProps) {
  return <Error>{message}</Error>;
}
