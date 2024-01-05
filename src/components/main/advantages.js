import {ReactComponent as Speed} from '../../images/main/advantages/speed.svg';
import {ReactComponent as Convenience} from '../../images/main/advantages/convenience.svg';
import {ReactComponent as Cheerfulness} from '../../images/main/advantages/cheerfulness.svg';
import {ReactComponent as Ecological} from '../../images/main/advantages/ecological.svg';


export const advantages = [
    {
        id: 1,
        title: 'Скорость',
        text: 'Готовый напиток всегда под рукой — просто открой банку',
        img: <Speed/>,
    },
    {
        id: 2,
        title: 'Удобство',
        text: 'Легко помещается и в карман, и в маленькую сумочку',
        img: <Convenience/>,
    },
    {
        id: 3,
        title: 'Бодрость',
        text: 'Сбалансированная доза кофеина даст мощный заряд энергии',
        img: <Cheerfulness/>,
    },
    {
        id: 4,
        title: 'Экологичность',
        text: 'Вся упаковка сделана из перерабатываемых материалов',
        img: <Ecological/>,
    },
]