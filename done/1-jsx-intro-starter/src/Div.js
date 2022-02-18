// create Div Component
import Thread from './Thread';

const Div = (props) => {
    return (
    <div className='div'>
        <h1>Div Component</h1>
        <Thread firstName={props.first} />
    </div>);
}
export default Div;
