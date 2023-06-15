import '../App.css';
import { useContext } from 'react';
import { CurrencyContext } from '../context/currencies-context';

const Course = ({ course }) => {
    const currency = useContext(CurrencyContext);

    const { title, img, price } = course;

    const contextPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.code,
    }).format(price * currency.conversionRate);

    return (
        <li className='courses'>
            <div className='courses__name'>
                <p>{title}</p>
            </div>
            <div className='courses__image'>
                <img src={img} alt='react image'/>
            </div>
            <div className='courses__description'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam neque,
                molestiae accusamus optio quaerat sint accusantium commodi quo quasi laborum
                officia, nisi dicta nobis dolor dignissimos error? Eum, corporis excepturi?
                </p>
            </div>
            <div className='courses__price'>
                <p>{contextPrice}</p>
                <button className='btn__buy'>BUY</button>
            </div>
        </li>
    )
};

export default Course;