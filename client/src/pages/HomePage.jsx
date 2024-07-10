import NavBar from "../components/NavBar";
import SearchForRoom from "../components/HomePage/SearchForRoom";
import Description from "../components/HomePage/Description";
import Service from "../components/HomePage/Service";
import RoomAndSuits from "../components/HomePage/RoomAndSuits";
import CustomerSays from "../components/HomePage/CustomerSays";
import Footer from "../components/Footer";


function HomePage() {
  return (
    <main>
      <SearchForRoom />
      <Description />
      <Service />
      <RoomAndSuits />
      <CustomerSays />
      <Footer />
    </main>
  );
}

export default HomePage;
