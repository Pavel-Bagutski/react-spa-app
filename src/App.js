import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Reciple } from "./pages/Reciple";
//import { Movie } from "./pages/Movie";

function App() {
    return (
        <>
            <Router basename="/react-spa-app">
                <Header />
                <main className="container content">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/contacts"
                            element={<Contact />}
                        />
                        <Route
                            path="/category/:name"
                            element={<Category />}
                        />
                        <Route
                            path="/meal/:id"
                            element={<Reciple />}
                        />
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
