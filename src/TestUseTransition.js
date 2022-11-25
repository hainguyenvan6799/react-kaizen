import Images from './test.json';
import {useState, useTransition} from 'react';
const TestUseTransition = () => {
    const [query, setQuery] = useState('');
    const [input, setInput] = useState('');
    const [isUpdating, startTransition] = useTransition();

    const handleChangeInput = (event) => {
        setInput(event.target.value);
        startTransition(() => setQuery(event.target.value))
    }

    const fillteredImages = Images.filter(image => {
        return image.title.includes(query);
    })
    return (
        <div>
            <input value={input} onChange={handleChangeInput}/>
            {isUpdating && <h1>The page is updating</h1>}
            {fillteredImages.map(image => 
                <h2>{image.title}</h2>
            )}
        </div>
    )
}
export default TestUseTransition;