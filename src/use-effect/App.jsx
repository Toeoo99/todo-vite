
import React, { useState } from 'react';
import LifecycleDemo from "@/use-effect/LifecycleDemo";

function App() {
  const [random, setRandom] = useState(Math.random());

  const [mounted, setMounted] = useState(true);

  const reRender = () => setRandom(Math.random());

  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-Render</button>

      <button onClick={toggle}>Show\Hide LifeCycleDemo</button>
          {mounted && <LifecycleDemo />}
          
          
    </>
  );
}


export default App;