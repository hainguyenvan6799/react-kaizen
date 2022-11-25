import {useState, useSyncExternalStore} from "react";
import "./index.css";

const Component = () => {
    let [now, setNow] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setNow(new Date().toLocaleTimeString());
    }, 1000);

    return <p>The time is {now}</p>
}

let now = new Date().toLocaleTimeString();
setInterval(() => {
    now = new Date().toLocaleTimeString();
    notifiers.forEach(notify => notify())
}, 1000);

let notifiers = new Set();

const Component2 = () => {
    let store = useSyncExternalStore((notify) => {
        notifiers.add(notify);

        return () =>  notifiers.delete(notify);
    }, () => now);

    return <p>The time is: {store}</p>
}

const NotUsingUseSyncExternalLibrary = () => {
    let [showing, setShowing] = useState(true);

    return (
        <div className="notUsingUseSyncExternalLibrary">
            <h4>This sample is not using useSyncExternalLibrary() hook</h4>
            <button onClick={() => setShowing(!showing)}>Toggle</button>
            {showing && <Component/>}
            <Component/>
        </div>
    );
}




const UsingUseSyncExternalLibrary = () => {
    let [showing, setShowing] = useState(true);

    return (
        <div className="usingUseSyncExternalLibrary">
            <h4>This sample is using useSyncExternalLibrary() hook</h4>
            <button onClick={() => setShowing(!showing)}>Toggle</button>
            {showing && <Component2/>}
            <Component2/>
        </div>
    );
}

const UseSyncExternalLibrarySample = () => {
    return (
        <>
            <NotUsingUseSyncExternalLibrary/>
            <UsingUseSyncExternalLibrary/>
        </>
    )
}


export default UseSyncExternalLibrarySample;