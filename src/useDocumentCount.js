import { useEffect, useState } from "react"

export default function useDocumentCount(){

    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title = `User count ${count}`;
        return () => {
            //componen unmounts
            document.title = 'react app';
        }
    },[count])

    const increment = () => {
        setCount (count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return {
        count,
        increment,
        decrement
    }


}