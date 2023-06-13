import { useRef, useEffect } from "react";


function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current);

    inputRef.current.focus();
  }, []);

  console.log(inputRef.current);

  return <input ref={inputRef} type="text" />;
}
export default InputFocus;
