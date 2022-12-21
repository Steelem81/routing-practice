import { useParams } from "react-router";

const Hello = props => {
    const {word, text_color ,bg_color} = useParams();
    const helloStyle = {
        background: `${bg_color}`,
        color: `${text_color}`
    }
    return (
        <div style = {helloStyle}><h3>{ word }</h3></div>
    )

}

export default Hello;