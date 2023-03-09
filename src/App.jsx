import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SmoothScroll from "./components/SmoothScroll";

import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Luca from "./components/videosComponents/Luca";
import Avengers from "./components/videosComponents/Avengers";
import Onward from "./components/videosComponents/Onward";
import Xmen from "./components/videosComponents/Xmen";
import Obi from "./components/videosComponents/Obi";
import Pinocchio from "./components/videosComponents/Pinocchio";
import Panther from "./components/videosComponents/Panther";
import Prey from "./components/videosComponents/Prey";
import Lightyear from "./components/videosComponents/Lightyear";
import Family from "./components/videosComponents/Family";
import Loki from "./components/videosComponents/Loki";
import Secrets from "./components/videosComponents/Secrets";
import Bad from "./components/videosComponents/Bad";
import Toy from "./components/videosComponents/Toy";
import Mandalorian from "./components/videosComponents/Mandalorian";
import Simpsons from "./components/videosComponents/Simpsons";
import Coco from "./components/videosComponents/Coco";
import Twd from "./components/videosComponents/Twd";
import Soul from "./components/videosComponents/Soul";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <SmoothScroll>
                    <Routes>
                        <Route exact path="/" element={<Login />}></Route>
                        <Route path="/home" element={<Home />}></Route>

                        <Route path="/onward" element={<Onward />}></Route>
                        <Route path="/xmen" element={<Xmen />}></Route>
                        <Route path="/obiwan" element={<Obi />}></Route>
                        <Route
                            path="/pinocchio"
                            element={<Pinocchio />}
                        ></Route>

                        <Route path="/panther" element={<Panther />}></Route>
                        <Route path="/prey" element={<Prey />}></Route>
                        <Route
                            path="/lightyear"
                            element={<Lightyear />}
                        ></Route>
                        <Route path="/family" element={<Family />}></Route>

                        <Route path="/loki" element={<Loki />}></Route>
                        <Route path="/whales" element={<Secrets />}></Route>
                        <Route path="/luca" element={<Luca />}></Route>
                        <Route path="/bad" element={<Bad />}></Route>

                        <Route path="/toystory" element={<Toy />}></Route>
                        <Route path="/avengers" element={<Avengers />}></Route>
                        <Route
                            path="/mandalorian"
                            element={<Mandalorian />}
                        ></Route>
                        <Route path="/simpsons" element={<Simpsons />}></Route>

                        <Route path="/coco" element={<Coco />}></Route>
                        <Route path="/twd" element={<Twd />}></Route>
                        <Route path="/soul" element={<Soul />}></Route>
                    </Routes>
                </SmoothScroll>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
