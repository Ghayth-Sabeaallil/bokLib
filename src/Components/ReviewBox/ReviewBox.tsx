import { useContext, useState } from "react";
import "../../Styles/Components/ReviewBox.scss"
import { SaveReviewContext } from "../../Data/ContextProvider";
type ReviewBoxProps = {
    id: string;
}

const ReviewBox = ({ id }: ReviewBoxProps) => {
    const [rate, setRate] = useState<number>(0);
    const [review, setReview] = useState<string>("");
    const [pages, setPages] = useState<number>(0);
    const { reviewState, reviewDispatch } = useContext(SaveReviewContext);

    const handleRateChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setRate(parseInt(event.currentTarget.value));
    };
    const handleReviewChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
        event
    ) => {
        setReview(event.currentTarget.value);
    };
    const handlePageChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPages(parseInt(event.currentTarget.value));
    };

    const handleSaveReview: React.MouseEventHandler<HTMLButtonElement> = () => {
        reviewDispatch({
            type: "ADD_REVIEW",
            payload: {
                id: id,
                rate: rate,
                review: review,
                page: pages
            },
        });
    };

    return (
        <div className="review-box">
            <h2>Rating</h2>
            <div className="star-rating"><h3>0</h3>
                <input type="range" min={0} max={5} value={rate} onChange={handleRateChange} />
                <h3>5</h3>
            </div>
            <h3>{rate}</h3>
            <form action=""></form>
            <textarea className="text-area-review" name="book-review" placeholder="Write book review here ..." onChange={handleReviewChange}></textarea>
            <input type="number" placeholder="Pages" onChange={handlePageChange} />
            <button className="submit-btn" onClick={handleSaveReview}>Submit</button>
        </div>
    )
}
export default ReviewBox;