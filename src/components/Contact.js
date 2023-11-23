import { FaArrowRightLong } from "react-icons/fa6";

function Contact() {
    return (
        <section className="wrapper contact">
            <div className="contact__subscriber">
                <div className="contact__title">ĐĂNG KÍ THEO DÕI</div>
                <div className="contact__desc">
                    Để lại email đăng kí theo dõi chúng tôi để nhận được ưu đãi
                    sớm nhất qua email.
                </div>
                <form action="#" className="contact__form">
                    <input type="text" className="contact__input" />
                    <button className="button button-primary">
                        Đăng Ký <FaArrowRightLong />
                    </button>
                </form>
            </div>
            <div className="contact__care">
                <div className="contact__title">24/7 CHĂM SÓC KHÁCH HÀNG</div>
                <div className="contact__desc">
                    Hotline và kênh chat online của chúng tôi hoạt động 24/7 để
                    tư vấn & giải đáp thắc mắc của khách hàng. Đừng ngại liên hệ
                    ngay nhé.
                </div>
                <div className="contact__image">
                    <img
                        src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
                        alt=""
                        className="contact__image-admin"
                    />
                    <img
                        src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
                        alt=""
                        className="contact__image-admin"
                    />
                    <img
                        src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
                        alt=""
                        className="contact__image-admin"
                    />
                    <img
                        src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
                        alt=""
                        className="contact__image-admin"
                    />
                    <img
                        src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B"
                        alt=""
                        className="contact__image-admin"
                    />
                </div>
                {/* <button className="button button-primary">
                    Liên Hệ <FaArrowRightLong />
                </button> */}
            </div>
        </section>
    );
}

export default Contact;
