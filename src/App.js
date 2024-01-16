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
import AdminPage from "./components/Admin/Admin";
import EditTour from "./components/Admin/Tour/EditTour";
import EditNews from "./components/Admin/News/EditNews";
import EditTravelTicket from "./components/Admin/TravelTicket/EditTravelTicket";
import EditReview from "./components/Admin/Review/EditReview";
import AddTour from "./components/Admin/Tour/AddTour";
import ViewTour from "./components/Admin/Tour/ViewTour";
import ViewTravelTicket from "./components/Admin/TravelTicket/ViewTravelTicket";
import ViewReview from "./components/Admin/Review/ViewReview";
import ViewNews from "./components/Admin/News/ViewNews";
import AddNews from "./components/Admin/News/AddNews";
import AddTravelTicket from "./components/Admin/TravelTicket/AddTravelTicket";
import FlowerPage from "./pages/FlowerPage";
import LoginAdmin from "./components/Admin/LoginAdmin";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import DetailNewsPage from "./pages/DetailNewsPage";
import DetailTravelTicketPage from "./pages/DetailTravelTicketPage";
import EventsPage from "./pages/EventsPage";
import ReviewPage from "./pages/ReviewPage";
import TravelTicket from "./pages/TravelTicketPage";
import AirlineTicketPage from "./pages/AirlineTicketPage";

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/login" element={<LoginAdmin />} />
                <Route path="/admin/tour/add" element={<AddTour />} />
                <Route
                    path="/admin/travelticket/view"
                    element={<ViewTravelTicket />}
                />
                <Route path="/admin/news/add" element={<AddNews />} />
                <Route
                    path="/admin/travelticket/add"
                    element={<AddTravelTicket />}
                />
                <Route path="/admin/tour/view" element={<ViewTour />} />
                <Route path="/admin/news/view" element={<ViewNews />} />
                <Route path="/admin/review/view" element={<ViewReview />} />
                <Route path="/admin/tour/edit/:idTour" element={<EditTour />} />
                <Route
                    path="/admin/review/edit/:idReview"
                    element={<EditReview />}
                />
                <Route path="/admin/news/edit/:idNews" element={<EditNews />} />
                <Route
                    path="/admin/travelticket/edit/:idTravelTicket"
                    element={<EditTravelTicket />}
                />
                <Route path="/tour-trong-nuoc" element={<TourInVietNam />} />
                <Route
                    path="/tour-trong-nuoc/category/:idCategory"
                    element={<TourInVietNam />}
                />
                <Route path="/tour-nuoc-ngoai" element={<ForeignTour />} />
                <Route path="/dich-vu-visa" element={<VisaPage />} />
                <Route path="/hoa-tuoi" element={<FlowerPage />} />
                <Route path="/thue-xe" element={<RentCarPage />} />
                <Route path="/ho-so-nang-luc" element={<ProfilePage />} />
                <Route
                    path="/teambuilding-event"
                    element={<TeambuildingPage />}
                />
                <Route
                    path="/detail-tour/idTour/:idTour"
                    element={<DetailTourPage />}
                />
                <Route path="/gioi-thieu" element={<AboutPage />} />
                <Route
                    path="/trai-nghiem-sinh-vien"
                    element={<StudentExperiencePage />}
                />
                <Route
                    path="/sinh-vien-quoc-te"
                    element={<InternationalStudentPage />}
                />
                <Route path="/lien-he" element={<ContactPage />} />
                <Route path="/tin-tuc" element={<NewsPage />} />
                <Route
                    path="/tin-tuc/chi-tiet-bai-viet/idNews/:idNews"
                    element={<DetailNewsPage />}
                />
                <Route
                    path="/ve-tham-quan-du-lich/chi-tiet/idTravelTicket/:idTravelTicket"
                    element={<DetailTravelTicketPage />}
                />
                <Route path="/events" element={<EventsPage />} />
                <Route
                    path="/dat-ve-may-bay"
                    element={<InternationalStudentPage />}
                />
                <Route
                    path="/dat-phong-khach-san"
                    element={<InternationalStudentPage />}
                />
                <Route path="/ve-may-bay" element={<AirlineTicketPage />} />
                <Route
                    path="/ve-tham-quan-du-lich"
                    element={<TravelTicket />}
                />
                <Route
                    path="/ve-combo"
                    element={<InternationalStudentPage />}
                />
                <Route
                    path="/viec-lam-nuoc-ngoai"
                    element={<InternationalStudentPage />}
                />
                <Route path="/danh-gia" element={<ReviewPage />} />
                <Route path="*" element={<InternationalStudentPage />} />
            </Routes>
        </div>
    );
}

export default App;
