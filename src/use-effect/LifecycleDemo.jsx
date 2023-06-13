import React, { useEffect } from 'react'

function LifecycleDemo() {
    useEffect(() => {

        console.log('render!');
        return () => console.log('Unmounting...');

    })
    return " I'm a life cycle demo"
}

export default LifecycleDemo;
