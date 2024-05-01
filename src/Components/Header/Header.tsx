import "../../Styles/Components/Header.scss"

function Header() {
    return (
        <><header className="navbar-dekstop">
            <a className="logo" href="/"><img src="/logo.png" alt="logo" /></a>
            <div className="search-bar">
                <select>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="isbn">ISBN</option>
                </select>
                <form action=""><input type="text" placeholder="title/author/isbn" /></form>
            </div>
            <select>
                <option value="title">Favourit Books</option>
                <option value="author">Read Books</option>
            </select>
        </header>
        </>
    );
}

export default Header;
