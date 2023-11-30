import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import URL from "../../api/URL";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const notify = () => toast();
    const navigate = useNavigate();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        let data = {
            username: username,
            password: password,
        };
        axios.post(URL.URL_getIdAdmin, data).then((response) => {
            if (response.data.idAdmin === null) {
                toast.error(
                    "Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại",
                    {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    }
                );
            } else {
                localStorage.setItem(
                    "idAdmin",
                    JSON.stringify(response.data.idAdmin)
                );
                toast.success("Đăng nhập thành công! Chuyển hướng sau 3s", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                // window.location.reload();
                navigate("/admin");
            }
        });
    };
    return (
        <div className="container ">
            <div className="login">
                <h1 className="login-heading">LOGIN ADMIN</h1>
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="username" className="login-label">
                        User name
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="login-input"
                        placeholder="Nhập tài khoản..."
                        autoComplete="off"
                        onChange={handleChangeUsername}
                    />

                    <label htmlFor="password" className="login-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="login-input"
                        placeholder="Nhập mật khẩu..."
                        autoComplete="off"
                        onChange={handleChangePassword}
                    />
                    <button onClick={notify} className="login-submit">
                        Đăng Nhập
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default LoginAdmin;
