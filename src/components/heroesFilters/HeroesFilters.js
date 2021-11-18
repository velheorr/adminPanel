
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getFilters} from "../../actions";
import {useHttp} from "../../hooks/http.hook";

const HeroesFilters = () => {
    const {filters } = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        request("http://localhost:3001/filters")
            .then(data => dispatch(getFilters(data)))
    }, []);

    let options;
    if (filters){
        options = filters.map(i=> <button key={i.key} className={`btn ${i.class} ${i.value ? "active" : null}`}>{i.value}</button>)
    }

    const makeActive = (id)=>{

    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {/*<button className="btn btn-outline-dark active">Все</button>*/}
                    {options}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;