import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const HeroItem = (props) => {
          const {data} = props
          const {id,img_url, name} = data
  return (
    <Link to={`/blogs/${id}`}>
     <li>
          <img src={img_url} className='image' alt={`item${id}`}/>
          <h1 className='n'>{name}</h1>
    </li>
    </Link>
   
  )
}
export default HeroItem;