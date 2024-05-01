import "../../Styles/Components/Card.scss"
type Props = {
    title: string,
    authors: string,
    year: number,
    img_id: number,

}

const Card = ({ title, authors, year, img_id }: Props) => {
    return (
        <>
            <div className="bok-card">
                <img src={`https://covers.openlibrary.org/b/id/${img_id}-M.jpg`} alt={title} />
                <span className="info">
                    <h3>{title}</h3>
                    <p>{authors}</p>
                    <p>{year}</p></span>


            </div>
        </>
    )
};
export default Card;