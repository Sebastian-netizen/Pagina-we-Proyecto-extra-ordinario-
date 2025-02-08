import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';

const games = [
  { title: "Kingdom Come Deliverance II", image: "https://elamigos.site/img/kink2.jpg", downloadLink: "#" },
  { title: "Marvel's Spider-Man 2", image: "https://elamigos.site/img/spider2.jpg", downloadLink: "#" },
  { title: "Final Fantasy VII Rebirth", image: "https://elamigos.site/img/final7Rebi.jpg", downloadLink: "#" },
  { title: "S.T.A.L.K.E.R. 2", image: "https://elamigos.site/img/stalker2.jpg", downloadLink: "#" },
  { title: "Farming Simulator 25", image: "https://elamigos.site/img/farming25.jpg", downloadLink: "#" },
  { title: "Indiana Jones", image: "https://elamigos.site/img/indy.jpg", downloadLink: "#" },
  { title: "Dragon Age: The Veilguard", image: "https://elamigos.site/img/dragonAgeV.jpg", downloadLink: "#" },
  { title: "God of War Ragnarok", image: "https://elamigos.site/img/ragnar.jpg", downloadLink: "#" },
  { title: "Assassin's Creed Mirage", image: "https://elamigos.site/img/creedMirage.jpg", downloadLink: "#" },
  { title: "Silent Hill 2", image: "https://elamigos.site/img/silent2.jpg", downloadLink: "#" },
  { title: "Red Dead Redemption", image: "https://elamigos.site/img/radar1.jpg", downloadLink: "#" },
  { title: "Dragon Ball Z", image: "https://elamigos.site/img/sparking0.jpg", downloadLink: "#" },
  { title: "Elden Ring", image: "https://elamigos.site/img/eldenR.jpg", downloadLink: "#" },
  { title: "Ghost of Tsushima", image: "https://elamigos.site/img/tushy.jpg", downloadLink: "#" },
  { title: "Horizon Forbidden West", image: "https://elamigos.site/img/fwest.jpg", downloadLink: "#" },
  { title: "Starfield", image: "https://elamigos.site/img/starfield.jpg", downloadLink: "#" },
  { title: "Jedi Survivor", image: "https://elamigos.site/img/jediSW.jpg", downloadLink: "#" },
  { title: "Baldur's Gate 3", image: "https://elamigos.site/img/baldur3.jpg", downloadLink: "#" },
  { title: "Hogwarts Legacy", image: "https://elamigos.site/img/hogwart.jpg", downloadLink: "#" },
  { title: "Forza Horizon 5", image: "https://elamigos.site/img/forza5.jpg", downloadLink: "#" },
  { title: "Cyberpunk 2077", image: "https://elamigos.site/img/cyberpunkV2.jpg", downloadLink: "#" },
  { title: "Red Dead Redemption II", image: "https://elamigos.site/img/radar2gakuh.jpg", downloadLink: "#" },
  { title: "The Sims 4", image: "https://elamigos.site/img/sims44p4ksbbdd2l.jpg", downloadLink: "#" },
  { title: "Grand Theft Auto V", image: "https://elamigos.site/img/gta5dqyiqpicja.jpg", downloadLink: "#" },
];

const Home = () => (
  <div className="content">
    <a href="/" className="back-link">&lt;&lt;&lt; Go back to homepage</a>
    <div className="game-container">
      {games.map((game, index) => (
        <div className="game-card" key={index}>
          <img src={game.image} alt={game.title} className="game-image" />
          <h2>{game.title}</h2>
          <a href={game.downloadLink} className="download-link">DOWNLOAD</a>
        </div>
      ))}
    </div>
  </div>
);

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;










