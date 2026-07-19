import { useEffect, useState } from "react" 

const Divider: React.FC = () => {
    const [transition, setTransition] = useState<string>('transition-all duration-1000 ease-in-out w-0')
    
    useEffect(() => {
        setTimeout(() => {
            setTransition('transition-all duration-1000 ease-in-out w-5/6')
        }, 600);
        return ()=>setTransition('transition-all duration-1000 ease-in-out w-0')
    }, [])

    return (
        <div className="flex flex-col">
            <div className={`h-0.5 md:h-1 my-0.5 bg-accent ${transition}`}></div>
            <div className={`h-0.5 md:h-1 my-0.5 bg-accent self-end ${transition}`}></div>
        </div>
    )
}

export default Divider
