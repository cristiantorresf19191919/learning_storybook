import { useEffect, useState } from "react"

export default function useChangeBackground (color ="green"){
    useEffect(()=> {
        //run once even if any state changes
        const handler = (event) =>{
            if (event.key == 'f'){
                document.body.style.backgroundColor = color
            } else {
                
                document.body.style.backgroundColor = "white"
            }
        }
        window.addEventListener('keyup',handler);
        
        return () => {
            window.removeEventListener('keyup',handler);
            document.body.style.backgroundColor = "white"
        }
    
    },[])


   
}

