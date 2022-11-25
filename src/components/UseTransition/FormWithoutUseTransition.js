import {useState} from 'react';

const FormWithoutUseTransition = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const LIST_SIZE = 20000;

    const handleChange = (event) => {
        setInput(event.target.value);
        const listTemp = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            listTemp.push(event.target.value);
        }
        setList(listTemp);
    }

    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            {
                list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
        </>
    )
}

export default FormWithoutUseTransition;