
import {useEffect, useState} from 'react'



export default function Greetings(props){
    const [name] = useState("Phoenix Explorer");
    const [surname] = useState("Soaring");
    //useState can accomodate function that runs once and only once for first render
    const [count, setCount] = useState(()=>{
        
        console.log("first render")
        return null
        
    });


    return null
}

/*
    function reduceCount() {
        setCount(prevCount => {prevCount - 1})
    }

    //with hooks we separate code not based on the lifecycle method name but based on what the code is doing -Dan Abramov
    //custom hook names always start with use (eg: useWindowWidth(), useFontSize()... )
    useEffect(() => {
        document.title = name + ' ' + surname;
    });

*/


