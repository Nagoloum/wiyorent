import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';
import Spinner from './composants/Spinner';

const Home = React.lazy(() => import('./pages/Home'));
const List = React.lazy(() => import('./pages/List'));
const Error = React.lazy(() => import('./pages/Errorpage'));

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
      <Suspense fallback={<div>Chargement...</div>}>
        <div className=''>
          {loading ? (
            <Spinner /> // Affiche le spinner pendant le chargement
          ) : (
            <div>
              {/* Contenu de la page ici */}
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/list" element={<List />} />
                  <Route path="*" element={<Error />} /> {/* Route catch-all pour les pages non trouvées */}
                </Routes>
              </main>
            </div>
          )}
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
