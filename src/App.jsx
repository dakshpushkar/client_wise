import About from "./Components/AboutSection/About";
import BeneFitsSection from "./Components/BenefitsSection/BeneFitsSection";
import MainSection from "./Components/DownloadSection/MainSection";
import Footer from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import Queries from "./Components/QueriesSection/Queries";
import Trail from "./Components/TrailSection/Trail";

function App() {
  return (
    <div class="">
     <Header/>
     <MainSection/>
     <Trail/>
     <BeneFitsSection/>
     <Queries/>
     <About/>
     <Footer/>
    </div>
  );
}

export default App;
