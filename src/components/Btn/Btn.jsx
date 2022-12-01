import './Btn.scss';
import icon from '../../assets/Icon/arrow-right-solid.svg';


export default function Btn({text, class_name, onClick}){
    const arrow = <img src={icon} alt="arrow right" className='btn_icon' />

    return(
        <button onClick={onClick} className={`btn ${class_name}`}>
            {text} {arrow}
        </button>
);
}