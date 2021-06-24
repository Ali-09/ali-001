import { useEffect, useState } from "react" 

const Divider = () => {
    const [transition, setTransition] = useState('transition-all duration-1000 ease-in-out w-0')
    
    useEffect(() => {
        setTimeout(() => {
            setTransition('transition-all duration-1000 ease-in-out w-5/6')
        }, 600);
        return ()=>{
            setTransition('transition-all duration-1000 ease-in-out w-0')
        }
    }, [])

    return (
        <div className="flex flex-col">
            <div className={`h-1.5 my-1 bg-red-400 ${transition}`}></div>
            <div className={`h-1.5 my-1 bg-red-400 self-end ${transition}`}></div>
        </div>
    )
}

export default Divider
