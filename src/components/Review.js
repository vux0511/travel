import React, { useState, useRef, useMemo, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import URL from "../api/URL";

function Review() {
    const [titleReview, setTitleReview] = useState("");
    const [contentReview, setContentReview] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    const handleChangeTitle = (e) => {
        setTitleReview(e.target.value);
    };
    const handleChangeContent = (e) => {
        setContentReview(e.target.value);
    };
    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleChangeName = (e) => {
        setFullName(e.target.value);
    };

    const handleAddReview = (e) => {
        e.preventDefault();
        let data = {
            titleReview: titleReview,
            contentReview: contentReview,
            fullName: fullName,
            phone: phone,
        };

        axios.post(URL.URL_addReview, data).then((response) => {
            if (response.data.status === "success") {
                toast.success("Thêm thành công", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error("Thêm thất bại", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        });
    };

    return (
        <div className="wrapper">
            <img
                src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Teambuilding Banner"
                className="teambuilding__banner"
            />
            <section className="container teambuilding">
                <div className="visa__title visa__line teambuilding__title">
                    ĐÁNH GIÁ NGƯỜI DÙNG
                </div>
                <div className="review">
                    <img
                        src="https://images.unsplash.com/photo-1525811902-f2342640856e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="review__image"
                    />
                    <form onSubmit={handleAddReview} className="review__form">
                        <div className="review__title">
                            Đánh giá của người dùng
                        </div>
                        <label htmlFor="tour" className="review__label">
                            Dịch vụ trải nghiệm
                        </label>
                        <input
                            id="tour"
                            type="text"
                            className="review__input"
                            placeholder="Nhập tour hoặc dịch vụ bạn đã trải nghiệm"
                            onChange={handleChangeTitle}
                            required
                        />

                        <label htmlFor="content" className="review__label">
                            Nội dung
                        </label>
                        <textarea
                            id="content"
                            className="review__area"
                            rows="4"
                            cols="50"
                            placeholder="Nhập nội dung đánh giá của bạn..."
                            onChange={handleChangeContent}
                            required
                        />
                        <div className="review__info">
                            <div className="div">
                                <label htmlFor="name" className="review__label">
                                    Tên của bạn
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="review__input"
                                    placeholder="Nhập tên của bạn"
                                    onChange={handleChangeName}
                                    required
                                />
                            </div>

                            <div className="div">
                                <label
                                    htmlFor="phone"
                                    className="review__label"
                                >
                                    Số điện thoại
                                </label>
                                <input
                                    type="number"
                                    required
                                    id="phone"
                                    className="review__input"
                                    placeholder="Nhập số điện thoại liên lạc của bạn"
                                    onChange={handleChangePhone}
                                />
                            </div>
                        </div>
                        <button className="review__button">Gửi Đánh Giá</button>
                        <ToastContainer />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Review;
