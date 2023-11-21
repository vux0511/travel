import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import TourInVietNam from "./pages/TourInVietNam";

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tour-in-vietnam" element={<TourInVietNam />} />
                <Route path="/detail" element={<DetailPage />} />
            </Routes>
        </div>
    );
}

export default App;
