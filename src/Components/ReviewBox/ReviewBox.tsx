import { useContext, useEffect, useRef, useState } from "react";
import "../../Styles/Components/ReviewBox.scss"
import { SaveContext } from "../../Data/ContextDataProvider";
type ReviewBoxProps = {
    id: string;
}

const ReviewBox = ({ id }: ReviewBoxProps) => {
    const [rate, setRate] = useState<number>(0);
    const [review, setReview] = useState<string>("");
    const [pages, setPages] = useState<string>("");
    const [isReview, setIsReview] = useState<boolean>(false);
    const divRef = useRef<HTMLDivElement>(null);
    const { state, dispatch } = useContext(SaveContext);
    useEffect(() => {
        state.reviews.map((a) => {
            if (a.id === id) {
                setIsReview(true);
            }
        });
    });
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
        setPages(event.currentTarget.value);
    };

    const handleSaveReview: React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch({
            type: "ADD_REVIEW",
            payload: {
                id: id,
                rate: rate,
                review: review,
                page: pages
            },
        });
        if (divRef.current) {
            divRef.current.style.display = "none";
        }
    };

    return (
        <>{isReview ? null : <div ref={divRef} className="review-box">
            <div className="star-rating"><h3>0</h3>
                <input type="range" min={0} max={5} value={rate} onChange={handleRateChange} />
                <h3>5</h3>
            </div>
            <h3>{rate}</h3>
            <textarea className="text-area-review" name="book-review" placeholder="Write book review here ..." onChange={handleReviewChange}></textarea>
            <input type="number" placeholder="Pages" onChange={handlePageChange} /><div><button className="submit-btn" onClick={handleSaveReview}>Submit</button>
            </div>
        </div >}</>
    )
}
export default ReviewBox;