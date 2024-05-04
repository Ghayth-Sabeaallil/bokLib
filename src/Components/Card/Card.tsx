import "../../Styles/Components/Card.scss"
type cardProps = {
    handleClick: React.MouseEventHandler<HTMLDivElement>;
    title: string,
    authors: string,
    year: number,
    img_id: number,
    key_id: string,
}

const Card = ({ title, authors, year, img_id, handleClick, key_id }: cardProps) => {
    return (
        <>
            <div className="bok-card" id={key_id} onClick={handleClick}>
                {img_id == null ? <div className="bok-img-div"><img src="/image.png" alt="none" /></div> : <img className="bok-img" src={`https://covers.openlibrary.org/b/id/${img_id}-M.jpg`} alt={title} />}
                <span className="info">
                    <h2 className="title">{title}</h2>
                    <div className="line"></div>
                    <h3 className="author">{authors}</h3>
                    <div className="line"></div>
                    <h4 className="year">{year}</h4></span>
            </div>
        </>
    )
};
export default Card;