import Header from "../components/Header";
import Footer from "../components/Footer";
import StudentExperience from "../components/StudentExperience";
import { useEffect } from "react";

function StudentExperiencePage() {
    useEffect(() => {
        document.title = "TOUR HỌC SINH SINH VIÊN - HOẠT ĐỘNG NGOẠI KHOÁ";
    }, []);

    return (
        <>
            <Header />
            <StudentExperience />
            <Footer />
        </>
    );
}

export default StudentExperiencePage;
