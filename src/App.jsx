import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';
import Spinner from './composants/Spinner';
import Home from './pages/Home';
import Etudiants from './pages/Appartements_etudiants';
import Errorpage from './pages/Errorpage';
import Other_Services from './pages/Other_Services';
import Appartements from './pages/Appartements';
import Choix from './pages/choix';
import Car from './pages/Car_rental';
import Catering from './pages/Catering_service';
import Ceremony from './pages/Ceremonny_rooms';
import Deco from './pages/Decoration_service';
import House from './pages/House_rental';
import Restau from './pages/Restaurant_reservation';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement de page
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Délai de 2 secondes pour simuler le chargement

    return () => clearTimeout(timer); // Nettoyer le timer lors du démontage
  }, []);

  return (
    <Router>
      <div className=''>
        {loading ? (
          <Spinner /> // Affiche le spinner pendant le chargement
        ) : (
          <div>
            {/* Contenu de la page ici */}
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Appartement_pour_Etudiants" element={<Etudiants />} />
                <Route path="/Autres_appartements" element={<Appartements />} />
                <Route path="/Autres_services" element={<Other_Services />} />
                <Route path="/Choisir_Categorie" element={<Choix />} />
                <Route path="/Louer_une_voiture" element={<Car />} />
                <Route path="/Service_traiteur" element={<Catering />} />
                <Route path="/Louer_une_salle_de_ceremonie" element={<Ceremony />} />
                <Route path="/Refaire_ma_deco" element={<Deco />} />
                <Route path="/Louer_une_maison" element={<House />} />
                <Route path="/Reserver_un_restaurant" element={<Restau />} />
                <Route path="*" element={<Errorpage />} /> {/* Route catch-all pour les pages non trouvées */}
              </Routes>
            </main>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
