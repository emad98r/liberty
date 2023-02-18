import './Header.scss'
import { BsListNested } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Header = () => {

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'><h2 className='logo'>Liberty</h2>
        </Link>
        <button className='menu-list'><BsListNested /></button>
        <ul>
          <Link to='/'><li className='active'>Home</li></Link>
          <Link to='/Explore'><li>Explore</li></Link>
          <Link to='/ItemDetails'><li>Item Details</li></Link>
          <li>Author</li>
          <li>Create Yours</li>
        </ul>
      </div>
    </header >
  )

}
export default Header
