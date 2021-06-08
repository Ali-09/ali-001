const Transitions = () => {
    const stars = 350

    const getStarClass = () => {
        const rand = Math.floor(Math.random() * 3) + 1
        const randX = Math.floor(Math.random() * 8) + 4
        const randY = Math.floor(Math.random() * 8) + 4

        const bs = rand > 2 ? 'shadow-md' : 'shadow-xl'

        return `star-${rand} bg-gray-300 mx-${randX} my-${randY} ${bs}`
    }

    return (
        <div className="flex gap-3 flex-wrap justify-between content-between h-full overflow-hidden">
            {
                Array.from(Array(stars).keys()).map(star => (
                    <div key={star} className={getStarClass()}></div>
                ))
            }
        </div>
    )
}

export default Transitions
