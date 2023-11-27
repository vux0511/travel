function Brand() {
    return (
        <div className="wrapper wrapper__brand">
            <section className="container ">
                <div className="tours__desc">
                    CÁC KHÁCH HÀNG ĐÃ SỬ DỤNG DỊCH VỤ CỦA DINGDING TRAVEL
                </div>
                <div className="tours__header line">
                    Các Khách Hàng Tiêu Biểu
                </div>
                <div className="brand__wrapper">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/VietJet_Air_logo.svg/2560px-VietJet_Air_logo.svg.png"
                        alt="Brand Image"
                        className="brand__item"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Bamboo_Airways_Logo.svg/640px-Bamboo_Airways_Logo.svg.png"
                        alt="Brand Image"
                        className="brand__item"
                    />
                    <img
                        src="https://dongphucvina.vn/wp-content/uploads/2023/05/logo-vietnam-airline-dongphucvina.vn2_.png"
                        alt="Brand Image"
                        className="brand__item"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Asia_Commercial_Bank_logo.svg/1200px-Asia_Commercial_Bank_logo.svg.png"
                        alt="Brand Image"
                        className="brand__item"
                    />
                    <img
                        src="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Logo-Vietcombank.png"
                        alt="Brand Image"
                        className="brand__item"
                    />
                    <img
                        src="https://a25hotel.com/files/images/logo/logo-a25.png"
                        alt="Brand Image"
                        className="brand__item"
                    />
                    <img
                        src="data:image/png;base64,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"
                        alt="Brand Image"
                        className="brand__item"
                    />
                    <img
                        src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Hoa-Sen-VN.png"
                        alt="Brand Image"
                        className="brand__item"
                    />
                    <img
                        src="https://static.vnuhcm.edu.vn/images/0%20Phong%204T/2019/Thang%205/19.05.21%20-%20Logo%20don-02.png"
                        alt="Brand Image"
                        className="brand__item"
                    />
                    <img
                        src="https://dongphucvina.vn/wp-content/uploads/2023/05/logo-dai-hoc-kinh-te-luat-dongphucvina.vn_.png"
                        alt="Brand Image"
                        className="brand__item"
                    />
                </div>
            </section>
        </div>
    );
}

export default Brand;
