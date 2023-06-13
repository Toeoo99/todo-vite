import { useRef,useState } from 'react'

function LogButtonClicks() {
    // const countRef = useRef(0);

    const [count, setCount] = useState(0);

    const handle = () => {
        // countRef.current++;
        // console.log(`Clicked ${countRef.current} times`);

       const updatedCount = count + 1;
       console.log(`Clicked ${updatedCount} times`);
       setCount(updatedCount);

    };

    console.log("I render!");
    return <button onClick={handle}>Click Me</button>
}

export default LogButtonClicks;