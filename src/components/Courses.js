import '../App.css';
import Course from './Course';

const Courses = ({ list, onSearchTerm, onGetOption }) => {
    return (
        <ul className='courses__wrapper'>
            {list.filter(courses => {
                if (onSearchTerm === '') {
                    return courses;
                } else if (courses.name.toLowerCase().includes(onSearchTerm.toLowerCase())) {
                    return courses;
                }
            }).sort((a, b) => {
                if (onGetOption === 'low') {
                    return a.price - b.price // sort the number in ascending order
                } else if (onGetOption === 'high') {
                    return b.price - a.price /// sort the number in descending order
                }
            }).map(item => (
                <Course key={item.id} course={item}/>
            ))}
        </ul>
    )
}

export default Courses;