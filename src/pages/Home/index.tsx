import { CampSection, Banner } from "./components";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import SERVER_URI from "@utils/server";

function Home() {
  const [popularCamps, setPopularCamps] = useState([]);
  const [saleCamps, setSaleCamps] = useState([]);

  useEffect(() => {
    axios
      .get(SERVER_URI + "/camps/hotcamps")
      .then((res) => setPopularCamps(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(SERVER_URI + "/camps/saledcamps")
      .then((res) => setSaleCamps(res.data));
  }, []);

  return (
    <Container>
      <Navigation />
      <Banner />
      <CampSection title="인기 부트 캠프" camps={popularCamps} />
      <CampSection title="특가 할인 캠프" camps={saleCamps} />
      <Footer />
    </Container>
  );
}

export default Home;

// Style
const Container = styled.div`
  margin: 0 auto;
`;
