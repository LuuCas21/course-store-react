import '../App.css';

const Button = ({ onClick, text }) => {
    return (
        <button className='btn__component' onClick={onClick}>{!text ? 'button' : text}</button>
    )
}

export default Button;