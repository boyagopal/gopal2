import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import './index.css'
import HeroItem from '../HeroItem';

const data =[
      {
            id:1,
            img_url:"https://i.pinimg.com/564x/bd/7e/24/bd7e2461445da56847f518e69c4a805c.jpg",
            name:"Vijay devarakonda"

      },
      {
            id:2,
            img_url:"https://i.pinimg.com/564x/a9/f3/97/a9f397b63d87546828c428d3a1d37895.jpg",
            name:"Yash"
      },
      {
            id:3,
            img_url:"https://i.pinimg.com/564x/96/67/3e/96673ebdcc37210613481963c88516ef.jpg",
            name:"Allu arjun"
      },
      {
            id:4,
            img_url:"https://i.pinimg.com/564x/fb/5c/99/fb5c99ce9c84b5d1de157c67c730bfd6.jpg",
            name:"Nani"
      },
      {
            id:5,
            img_url:"https://i.pinimg.com/564x/6a/9a/55/6a9a5548e27fada77a7c6fc4534e1aad.jpg",
            name:"Karthik"
      },
      {
            id:6,
            img_url:"https://i.pinimg.com/564x/39/db/ad/39dbad2c426f75e8827f41f2ae547386.jpg",
            name:"NTR"
      },
      {
            id:7,
            img_url:"https://i.pinimg.com/564x/ba/b5/a6/bab5a6de461e756a48ca101891a490cd.jpg",
            name:"Prabhas"
      },

      {
            id:8,
            img_url:"https://i.pinimg.com/564x/15/da/cd/15dacd20df54a96e221c6c1af33279ec.jpg",
            name:"Rana"
      },
      {
            id:9,
            img_url:"https://i.pinimg.com/564x/58/40/8d/58408d1cd39d6c10fa5b7b7858bd9a95.jpg",
            name:"RamCharan"
      },
      {
            id:10,
            img_url:"https://i.pinimg.com/564x/04/de/f9/04def9954b29dec77ef65a02d93ec5bb.jpg",
            name:"VarunTej"
      },
      {
            id:11,
            img_url:"https://i.pinimg.com/564x/f8/02/6c/f8026cb6d8a948ed7fd0eee4af9a3489.jpg",
            name:"Naga Shourya"
      },
      {
            id:12,
            img_url:"https://i.pinimg.com/564x/cf/8b/40/cf8b40a9d49f96a5aef1d7593e7194fb.jpg",
            name:"Dulquer Salman"
      },
      {
            id:13,
            img_url:"https://i.pinimg.com/564x/65/6a/1f/656a1f47050a0b5e2621fd46525d2d72.jpg",
            name:"Naga Chaithya"
      },
      {
            id:14,
            img_url:"https://i.pinimg.com/564x/90/2a/8b/902a8b74fc93b48940891c354dc537dd.jpg",
            name:"Power Star"
      }
    
      

]

function Heros() {
      const [loading, setLoading] =useState(false)
      useEffect(()=>{
            setLoading(true)
            setTimeout(()=>{
                  setLoading(false)
            },1000)
      },[])
      return(
          <div className='heros-container'>
                <hi className="heading">India Actors</hi>
                <ul className='u'>

                  {
                        loading ? 
                        <ClipLoader
                        color={'#33FFEC'}
                        loading={loading}
                     
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      /> 
                      :  data.map(items =>(
                        <HeroItem data={items} key={items.id}/>
                  ))
                  }
                  
                       
                  
                </ul>
          </div>
      )
}

export default Heros;