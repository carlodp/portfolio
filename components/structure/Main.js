import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header/Header";
import Hero from "@/components/section/Hero";

const MainContainer = styled.main`
  min-height: 2000px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 150px;
`;

const Main = (props) => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default Main;
