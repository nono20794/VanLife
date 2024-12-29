import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

// function Home() {
//   return (
//     <>
//       <Header />
//       <main className="home-main">
//         <h2>You got the travel plans, we got the travel vans.</h2>
//         <p>
//           Add adventure to your life by joining the #vanlife movement. Rent the
//           perfect van to make your perfect road trip.
//         </p>
//         <button>Find your van</button>
//       </main>
//       <Footer />
//     </>
//   );
// }

// function About() {
//   return (
//     <>
//       <Header />
//       <h1>this is about</h1>
//       <Footer />
//     </>
//   );
// }
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
