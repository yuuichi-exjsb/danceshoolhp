import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import Concept from "./components/Concept";
import Instractor from "./components/Instractor";
import Schedule from "./components/Schedule";
import Fee from "./components/Fee";
import Access from "./components/Access";
import Footer from "./components/footer";

//https://tailblocks.cc/

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Concept />
      <Schedule />
      <Instractor />
      <Fee />
      <Access />
      <Footer />
    </div>
  );
}

export default App;
