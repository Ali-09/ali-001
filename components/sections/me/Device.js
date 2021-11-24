import { useState, useEffect } from 'react'

const Device = () => {
    const [lines, setLines] = useState([])

    useEffect(() => {

        const getBG = () => {
            const colors = ['bg-green-300', 'bg-red-300', 'bg-blue-300']
            return colors[Math.floor(Math.random() * (3 - 0) + 0)]
        }

        
        const getWidth = () => {
            const sizes = ['w-1/6', 'w-3/6','w-3/6', 'w-2/6', 'w-1/6', 'w-2/6']
            return sizes[Math.floor(Math.random() * 5 + 1)]
        }
        
        const interval = setInterval(() => {
            if(lines.length<75) {
                setLines(lines=>[
                    ...lines,
                    <div key={lines.length} className={`flex-shrink-0 animate-pulse mx-1 h-2 ${getWidth()} ${getBG()} rounded my-1`}></div>
                ])
                document.getElementById("code_lines").scrollTo({ top: document.getElementById("code_lines").scrollHeight, behavior: 'smooth' })
            } else {
                clearInterval(interval)
            }
        }, 150);
        return () => clearInterval(interval) 
        
    }, [lines]);

    

    return (
        <div className="md:w-4/6 relative opacity-40 md:opacity-100">
            <div id="code_lines" className="border-gray-300 bg-blueGray-500 bg-opacity-20 md:content-start border-2 rounded w-full md:w-2/3 h-80 md:h-1/2 md:absolute md:right-4 md:bottom-40 overflow-y-hidden">
                <div className="flex flex-wrap p-1 mx-2 relative">
                    {
                        lines
                    }
                </div>
            </div>
        </div>
    )
}

export default Device
