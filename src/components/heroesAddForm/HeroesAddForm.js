

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
import { useDispatch, useSelector } from 'react-redux';
import {getFilters, heroesFetched} from '../../actions';
import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import {useHttp} from "../../hooks/http.hook";


const HeroesAddForm = () => {
    const {filters } = useSelector(state => state);
    const {request} = useHttp();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        request("http://localhost:3001/filters")
            .then(data => dispatch(getFilters(data)))
    }, []);

    let options;
    if (filters){
        options = filters.map(i=><option value={i.key}>{i.value}</option>)
    }

    const onSubmit = data => {
        data.id = Date.now()
        const req = JSON.stringify(data)
        request("http://localhost:3001/heroes", 'POST', req)
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    {...register("name", { required: true })}
                    type='text'
                    className="form-control"
                    placeholder="Как меня зовут?"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    {...register("description", { required: true })}
                    className="form-control"
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    {...register("element", { required: true })}
                    className="form-select" 
                >
                    <option >Я владею элементом...</option>
                    {options}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;