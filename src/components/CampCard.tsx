import routes from "@utils/routes";
import { Link } from "react-router-dom";
import { TypeCamp } from "../types/type";

function CampCard({ camp }: { camp: TypeCamp }) {
  return (
    <Link to={routes.campdetail + camp.id}>
      <div
        style={{
          backgroundImage: `url(${camp.classThumbnail})`,
          backgroundSize: "cover",
        }}
      >
        <div>{camp.recruitStatus}</div>
        <div>{camp.classTitle}</div>
        <div>{camp.classPeriod}</div>
        <div>{camp.classStart}</div>
      </div>
    </Link>
  );
}

export default CampCard;
