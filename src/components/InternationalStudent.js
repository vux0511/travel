import ComingSoonImage from "../assets/coming-soon.png";

function InternationalStudent() {
    return (
        <div className="container comingsoon">
            <img src={ComingSoonImage} alt="" className="comingsoon__image" />
            <div className="comingsoon__title">
                <p>Trang này sẽ sớm được phát triển.</p>
                <p>Cảm ơn bạn đã quan tâm.</p>
            </div>
        </div>
    );
}

export default InternationalStudent;
