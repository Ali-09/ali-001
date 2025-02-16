const FragmentCode = () => {

    const getBG = () => {
        const colors = ['bg-emerald-300', 'bg-red-300', 'bg-blue-300']
        return colors[Math.floor(Math.random() * (3 - 0) + 0)]
    }

    const getWidth = () => {
        const sizes = ['w-1/6', 'w-3/6','w-4/6', 'w-2/6', 'w-1/6', 'w-2/6']
        return sizes[Math.floor(Math.random() * 5 + 1)]
    }

    return (
        <div className={`px-1 h-2.5 ${getWidth()} my-1`}>
            <div className={`${getBG()} animate-pulse rounded h-full w-full`}></div>
        </div>
    )
}

export default FragmentCode