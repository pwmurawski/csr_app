import { ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
`;
const Content = styled.main``;
const Footer = styled.footer`
  text-align: center;
`;

interface ILayoutProps {
  content: ReactElement;
  footer: ReactElement;
}

export default function Layout({ content, footer }: ILayoutProps) {
  return (
    <Wrapper>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
}
