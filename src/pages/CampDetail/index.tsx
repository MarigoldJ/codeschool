import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import { fakeCamp } from "@utils/fakeLoad";
import SERVER_URI from "@utils/server";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BottomSection, TopSection } from "./components";

function CampDetail() {
  const { id } = useParams();
  const [camp, setCamp] = useState(fakeCamp);

  useEffect(() => {
    axios
      .post(SERVER_URI + "/camps/getbyid", { id })
      .then((res) => setCamp(res.data));
  }, [id]);

  return (
    <Container>
      <Navigation />
      <TopSection camp={camp} />
      <BottomSection camp={camp} />
      <Footer />
    </Container>
  );
}

export default CampDetail;

// Style
const Container = styled.div`
  margin: 0 auto;
`;
