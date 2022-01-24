import Banner from "@components/Banner";
import CampCard from "@components/CampCard";
import Footer from "@components/Footer";
import Header from "@components/Header";
import { TypeCamp } from "@utils/type";

// 추후 실제 데이터로 변경
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
  return (
    <>
      <Header />
      <Banner />
      <div>
        <div>인기 부트 캠프</div>
        <div>
          <CampCard camp={sampleCamp} />
          <CampCard camp={sampleCamp} />
          <CampCard camp={sampleCamp} />
          <CampCard camp={sampleCamp} />
        </div>
      </div>
      <div>
        <div>특가 할인 캠프</div>
        <div>
          <CampCard camp={sampleCamp} />
          <CampCard camp={sampleCamp} />
          <CampCard camp={sampleCamp} />
          <CampCard camp={sampleCamp} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
