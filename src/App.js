import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailTourPage from "./pages/DetailTourPage";
import TourInVietNam from "./pages/TourInVietNam";
import ForeignTour from "./pages/ForeignTour";
import VisaPage from "./pages/VisaPage";
import TeambuildingPage from "./pages/TeambuildingPage";
import RentCarPage from "./pages/RentCarPage";
import StudentExperiencePage from "./pages/StudentExperiencePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import InternationalStudentPage from "./pages/InternationalStudentPage";

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tour-trong-nuoc" element={<TourInVietNam />} />
                <Route path="/tour-nuoc-ngoai" element={<ForeignTour />} />
                <Route path="/dich-vu-visa" element={<VisaPage />} />
                <Route path="/thue-xe" element={<RentCarPage />} />
                <Route path="/ho-so-nang-luc" element={<ProfilePage />} />
                <Route
                    path="/teambuilding-event"
                    element={<TeambuildingPage />}
                />
                <Route path="/detail-tour/:id" element={<DetailTourPage />} />
                <Route path="/gioi-thieu" element={<AboutPage />} />
                <Route
                    path="/trai-nghiem-sinh-vien"
                    element={<StudentExperiencePage />}
                />
                <Route
                    path="/sinh-vien-quoc-te"
                    element={<InternationalStudentPage />}
                />
            </Routes>
        </div>
    );
}

export default App;
