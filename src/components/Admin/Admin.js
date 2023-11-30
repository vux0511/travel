import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
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
