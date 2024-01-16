import Sidebar from "./Sidebar";
import Home from "./Home";
import { useEffect } from "react";
import "boxicons";
import "../../scss/Admin.scss";

function App() {
    useEffect(() => {
        document.title = "ADMIN";
    }, []);

    return (
        <>
            {/* {idAdmin === "" ? (
                <div className="main-container">
                    <LoginAdmin />
                </div>
            ) : ( */}
            <div className="main-container">
                <Sidebar />
                <Home />
            </div>
            {/* )} */}
        </>
    );
}

export default App;
