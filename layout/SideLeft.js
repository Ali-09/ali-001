import LinkItem from '@components/LinkItem'

const SideLeft = () => {
    const tags = [
        {title:'ME', section:'/'},
        {title:'ABOUT', section:'about'},
        {title:'CONTACT', section:'contact'}
    ]

    return (
        <div className="aside">
            {
                tags.map((tag,k)=>(<LinkItem tag={tag} key={k}/>))
            }
        </div>
    )
}

export default SideLeft
