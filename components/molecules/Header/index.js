import { LinkedInLink, GithubLink } from "components"

const Header = () => {
    return (
        <div className="header">
            <div className="title-header">
                <h1 className="name-header">JESUS ALI</h1>
            </div>
            <div className='social'>
                <LinkedInLink/>
                <GithubLink/>
            </div>
        </div>
    )
}

export default Header