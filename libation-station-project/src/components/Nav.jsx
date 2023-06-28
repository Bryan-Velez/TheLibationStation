import { Link } from 'react-router-dom'

export const input = <input type="text" value="" placeholder='Search for your favorite cock'/>

const Nav = () => {
    return (
        <div className='nav'>
            {input}
            <Link className='link' to="/">Home</Link>
            <Link className='link' to='/drinks'>All Drinks</Link>
            <Link className='link' to='/alc'>NonAlcoholic Drinks</Link>
            <Link className='link' to='/nonAlc'>NonAlcoholic Drinks</Link>
        </div>
    )
}

export default Nav