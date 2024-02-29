import './index.css';
import { useNavigate } from 'react-router-dom';
const  Notfound = () => {
          const navigate = useNavigate();
          return(
          
          <div className="c">
                    <h1>Hello gopal your Data not found401</h1>
                    <button onClick={() => navigate('/')}>Back to Home Page</button>
          </div>
);
}
export default Notfound;