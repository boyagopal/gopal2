import {Component} from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const blogData = {
                 
  title: 'Vijay Details',
  imageUrl: 'https://i.pinimg.com/564x/ce/af/aa/ceafaa2dd8156e73df94415722af303e.jpg',
  
  
  content:
    'Deverakonda Vijay Sai was born in Hyderabad, Andhra Pradesh (now Telangana) to Govardhan Rao and Madhavi. His family hails from Thummanpeta village of erstwhile Mahbubnagar district (now Nagarkurnool). His father was a television serial director who quit doing them due to lack of success.',
}

        
      

class Gopal extends Component {

         
  renderBlogItemDetails = () => {
    const {title, imageUrl, content} = blogData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <br/>
        <br/>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
       <br/>
        <div>
          <Link to='/Heros'><button className='b'>Back</button></Link>
      </div>
      </div>
       
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default Gopal;
