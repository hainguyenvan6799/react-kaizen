import {useState} from 'react';

const Greet = (props) => {
    const [content, setContent] = useState('Please click Subscribe button');
    return (
        <div>
            <h2 style={{color: props.color}}>Hello, my name is {props.name}</h2>
            <p>{content}</p>
            <button onClick={() => setContent('Thank you for your subscribe')}>Subcribe</button>
        </div>
    )
}

export default Greet;

<Greet/>