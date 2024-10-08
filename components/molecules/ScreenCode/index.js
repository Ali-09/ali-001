import { useState, useEffect } from 'react'
import { FragmentCode } from 'components'

const ScreenCode = () => {
    const [lines, setLines] = useState([])

    useEffect(() => {

        const interval = setInterval(() => {
            if(lines.length<75) {
                setLines(lines=>[
                    ...lines,
                    <FragmentCode key={lines.length}/>
                ])
                document.getElementById("code_lines").scrollTo({ top: document.getElementById("code_lines").scrollHeight, behavior: 'smooth' })
            } else {
                clearInterval(interval)
            }
        }, 250);
        return () => clearInterval(interval) 
        
    }, [lines]);

    

    return (
        <div className="device">
            <div id="code_lines" className="code-lines">
                <div className="flex flex-wrap relative p-1">
                    {
                        lines
                    }
                </div>
            </div>
        </div>
    )
}

export default ScreenCode