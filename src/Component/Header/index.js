import {Link, NavLink} from 'react-router-dom';
import './index.css';

const  Header =() =>(
      <div className="bg-container">
        <div className="logo-container">
        <img className='logo' src="https://img.freepik.com/premium-photo/letter-g-logo-golden-details_7023-171358.jpg?w=740" alt="g"/>
        </div>  
       
         <ul className='ul-list'>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="heros"><li>Heros</li></NavLink>
                <NavLink to="/heroines"><li>Heroines</li></NavLink>
                <NavLink to="/Directors"><li>Directors</li></NavLink>   
              
         </ul>
          <div className='buttondiv'>
             <Link to="/login"><button type="button">Login</button></Link> 
        </div>
      </div>
 
  )

export default Header;