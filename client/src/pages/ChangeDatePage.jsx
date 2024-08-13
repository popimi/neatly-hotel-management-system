import Footer from "../components/Footer";
import ChangeDateTitle from "../components/ChangeDatePage/ChangeDateTitle";
import ChangeDateCard from "../components/ChangeDatePage/ChangeDateCard";
import { useLocation } from "react-router-dom";

function ChangeDatePage() {
  const location = useLocation();
  const details = location.state;

 
  return (
    <div className=" w-full h-full">
      <div>
        <ChangeDateTitle />
        <ChangeDateCard details={details} />
      </div>
    </div>
  );
}
export default ChangeDatePage;
