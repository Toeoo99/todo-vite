import { useRef,useEffect } from 'react';


function MyComponent({ prop }) {
  const myRef = useRef(0);

  useEffect(() => {
    myRef.current++; 

    setTimeout(() => {
      myRef.current++; 
    }, 1000);
  }, []);

  const handler = () => {
    myRef.current++; 
  };

  myRef.current++; 

  if (prop) {
    myRef.current++; 
  }

  return <button onClick={handler}>My button</button>;
}

export default MyComponent;