import React, { useState, useEffect } from "react";
import { getAllCategories } from "../component/api";
import { Preloader } from "../component/Preloader";
import { CategoryList } from "../component/CategoryList";
import { Search } from "../component/Search";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate(); // используем useNavigate

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate({
            pathname,
            search: `?search=${str}`, // обновляем строку поиска
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        });
    }, [search]);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} /> // отображаем отфильтрованный каталог
            )}
        </>
    );
}

export { Home };
