import {useParams} from 'react-router';

const Number = props => {
    const {num} = useParams();

    return (<h1>{num}</h1>)
}

export default Number;