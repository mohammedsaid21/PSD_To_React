import "./styles.css"
import Header from "./components/Header";
import Features from "./components/Features";
import OurTeam from "./components/OurTeam";
import DownloadSection from "./components/DownloadSection";
import Homework from "./components/Homework";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>

    {/* If We Have more than page */}
    {/* <Router>
      <Route exact path="/" element={<Home />} />
    </Router> */}
      <Header />

      <Features />

      <OurTeam />

      <DownloadSection />

      <Homework />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
