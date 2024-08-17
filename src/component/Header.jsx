import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className=" #2196f3 blue">
            <div className="nav">
                <Link
                    to="/"
                    className="brand-logo"
                >
                    Single Page App: Dishes
                </Link>
                <ul
                    id="nav-mobile"
                    className="right hide-on-med-and-down"
                >
                    <li>
                        <Link
                            className="grey-text text-lighten-4 right"
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="grey-text text-lighten-4 right"
                            to="/contacts"
                        >
                            Contacts
                        </Link>
                    </li>
                    <li>
                        <a
                            className="grey-text text-lighten-4 right"
                            href="https://github.com/Pavel-Bagutski/react-spa-app"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Repositoty
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
