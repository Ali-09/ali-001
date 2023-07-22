
const VueIcon = ({primaryColor, secondColor}) => {
    return (
        <svg version="1.1" className="w-3/12 h-full svg-opacity" x="0px" y="0px" viewBox="0 0 512 512" >
            <polygon id="triangle1" fill={secondColor} points="384,96 256,288 128,96 192,96 256,192 320,96 "/>
            <polygon id="triangle2" fill={primaryColor} points="448,96 256,416 64,96 128,96 256,288 384,96 "/>
            <polygon id="border" fill="none" className="path-border" stroke="#F87171" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="2" vectorEffect="non-scaling-stroke" points="64,96 192,96 256,192 320,96 448,96 256,416 "/>
        </svg>
    )
}

export default VueIcon
