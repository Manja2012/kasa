import PageAccueil from "./pages/PageAccueil/PageAccueil";
import Template from "./components/Template/HeaderFooter";
import PageHousing from "./pages/PageHousing/PageHousing";

import PageErreur from "./pages/PageErreur/PageErreur";
import "./sass/base.module.scss";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/housing/:housingId" element={<PageHousing />} />

          <Route path="*" element={<PageErreur />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;