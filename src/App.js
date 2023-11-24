import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import TourInVietNam from "./pages/TourInVietNam";
import ForeignTour from "./pages/ForeignTour";
import VisaPage from "./pages/VisaPage";
import TeambuildingPage from "./pages/TeambuildingPage";

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tour-trong-nuoc" element={<TourInVietNam />} />
                <Route path="/tour-nuoc-ngoai" element={<ForeignTour />} />
                <Route path="/dich-vu-visa" element={<VisaPage />} />
                <Route
                    path="/teambuilding-event"
                    element={<TeambuildingPage />}
                />
                <Route path="/detail" element={<DetailPage />} />
            </Routes>
        </div>
    );
}

export default App;
