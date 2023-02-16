import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/HeroPage";
import Description from "./Components/Description";
import Card from "./Components/Cards"
import ImageCollageComponent from "./Components/Collage"
import TextInMiddleComponent from "./Components/AboutSection"
function App() {
    return (
    <>
        <Navbar/>
        <Hero/>
        <Card/>
        <ImageCollageComponent/>
        <TextInMiddleComponent/>
    </>
    );
}

export default App;
