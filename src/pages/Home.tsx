import Banner from "@components/Banner";
// import CampCard from "@components/CampCard";
import CampSection from "@components/CampSection";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import { TypeCamp } from "@utils/type";
import styled from "styled-components";

// TODO: 추후 실제 데이터로 변경
const sampleCamp: TypeCamp = {
  id: 0,
  isHot: true,
  isSpecialDiscount: false,
  recruitStatus: "모집중",
  category: ["react"],
  classTitle: "React 실무PT",
  classStart: "2021-01-09",
  classPeriod: "6 weeks",
  classWhere: "온라인",
  classStudentCapacity: 8,
  classThumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_16ex3CJflX.png",
  classDetail: [],
  classFAQ: [],
};

function Home() {
  const popularCamps = [sampleCamp, sampleCamp, sampleCamp, sampleCamp];
  const saleCamps = [sampleCamp, sampleCamp, sampleCamp, sampleCamp];

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
