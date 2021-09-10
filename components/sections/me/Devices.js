import { useState, useEffect, useMemo } from 'react'

const Devices = () => {
    const [lines, setLines] = useState([])

    useEffect(() => {

        const getBG = () => {
            const colors = ['bg-green-300', 'bg-red-300', 'bg-blue-300']
            return colors[Math.floor(Math.random() * (3 - 0) + 0)]
        }

        const getWidth = () => Math.floor(Math.random() * (5 - 1) + 1)
        
        const interval = setInterval(() => {
            if(lines.length<35) {
                setLines(lines=>[
                    ...lines,
                    <div key={lines.length} className={`flex-shrink-0 animate-pulse mx-1 h-2 w-${getWidth()}/6 ${getBG()} rounded my-1`}></div>
                ])
            } else {
                clearInterval(interval)
            }
        }, 400);
        
        return () => clearInterval(interval) 
      
    }, [lines]);

    return (
        <div className="w-4/6 position relative">
            <div className="border-gray-600 content-start bg-blueGray-500 opacity-70 border-2 rounded w-96 h-80 absolute right-2 bottom-20 overflow-y-hidden p-1 mx-2 flex flex-wrap">
                    {
                        lines
                    }
            </div>
        </div>
    )
}

export default Devices
