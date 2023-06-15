import '../App.css';
import { useState } from 'react';
import Courses from './Courses';
import Button from './Button';
import { coursesDB } from '../db/coursesDB';
import { currenciesDB } from '../db/currenciesDB';
import { CurrencyContext } from '../context/currencies-context';

const Store = () => {
    const [currency, setCurrency] = useState(currenciesDB.Euro);
    const [getSearch, setSearch] = useState('');
    const [getOptionVal, setOptionVal] = useState('');

    const getFilterVal = (event) => {
        setSearch(event.target.value);
    };

    const getOption = (event) => {
        //console.log(event.target.value);
        setOptionVal(event.target.value);
    };

    return (
        <CurrencyContext.Provider value={currency}>
        <div className='store__wrapper'>
            <div className='currency__btns'>
            <div className='currency__div'>
            {Object.values(currenciesDB).map(cur => (
                <Button key={cur.label} text={cur.code} onClick={() => setCurrency(cur)} style={{ backgroundColor: '#eee' }}/>
            ))}
            </div>
            <div className='search_filter__div'>
                <input onChange={(event) => getFilterVal(event)} type='text' placeholder='search course'/>
                <select onChange={(event) => getOption(event)}>
                    <option value='' disabled selected hidden>Filter by price</option>
                    <option value='low'>Lowest price</option>
                    <option value='high'>Highest price</option>
                </select>
            </div>
            </div>
            <Courses list={coursesDB} onSearchTerm={getSearch} onGetOption={getOptionVal}/>
        </div>
        </CurrencyContext.Provider>
    )
};

export default Store;