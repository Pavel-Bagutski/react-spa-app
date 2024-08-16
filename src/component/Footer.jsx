function Footer() {
    return (
        <footer className="#2196f3 blue ">
            <div className="white-text footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="white-text text-lighten-4 right"
                        href="https://github.com/Pavel-Bagutski/react-SPA"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Repositoty
                    </a>
                </div>
            </div>
        </footer>
    );
}
export { Footer };
