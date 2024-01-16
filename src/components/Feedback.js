import { IoStar } from "react-icons/io5";

function Feedback({ feedback }) {
    return (
        <div className="feedback swiper-slide">
            <div className="feedback__item">
                <img src={feedback.avt} alt="" className="feedback__image" />
                <div className="feedback__name">{feedback.name}</div>
                <div className="feedback__position">{feedback.position}</div>
                <div className="feedback__rating">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                </div>
                <img className="feedback__desc" src={feedback.img} />
            </div>
        </div>
    );
}

export default Feedback;
