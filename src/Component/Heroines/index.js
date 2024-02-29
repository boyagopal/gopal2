import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


import HeroineItems from '../HeroineItem';
import './index.css'


const data =[
          {
                id:1,
                img_url:"https://i.pinimg.com/736x/df/f3/a4/dff3a48600569016372941bedf48a718.jpg",
                name:"Sita"
    
          },
          {
                id:2,
                img_url:"https://i.pinimg.com/564x/dc/b7/8c/dcb78ccde23b6d84b166c6a3fabf9e4c.jpg",
                name:"Priya"
          },
          {
                id:3,
                img_url:"https://i.pinimg.com/564x/d3/38/07/d338071a6b9ab00c8ad3e4e66bc94cfd.jpg",
                name:"Shruti Haasan"
          },
          {
                id:4,
                img_url:"https://i.pinimg.com/564x/28/04/b9/2804b92a6de17a792a5a542ab92291ca.jpg",
                name:"Nayanthara"
          },
          {
                id:5,
                img_url:"https://i.pinimg.com/564x/46/18/b2/4618b2a9043f81f71d9192a7f50f7d8e.jpg",
                name:"Anikha"
          },
          {
                id:6,
                img_url:"https://i.pinimg.com/564x/ae/a7/b6/aea7b6ec9ecce69a138e6ad4a047f07d.jpg",
                name:"Sreeleela"
          },
          {
                id:7,
                img_url:"https://i.pinimg.com/564x/f2/50/90/f25090c2c1f0e55b101ab00a8a807991.jpg",
                name:"Rashi khanna"
          },
    
          {
                id:8,
                img_url:"https://i.pinimg.com/564x/d3/3e/21/d33e21bced6de9710fd33cf7b5063838.jpg",
                name:"Rashmika"
          },
          {
                id:9,
                img_url:"https://i.pinimg.com/564x/70/ef/a2/70efa2ef7c786b1d37a00f20f7930e81.jpg",
                name:"Keerthy Suresh"
          },
          {
                id:10,
                img_url:"https://i.pinimg.com/564x/aa/77/c2/aa77c20dd28b6ed2b5bab26ce9a4793f.jpg",
                name:"Ivana"
          },
          {
                id:11,
                img_url:"https://i.pinimg.com/564x/15/2c/0f/152c0f8443574c9f7f1f0aad026e3a82.jpg",
                name:"Sai Pallavi"
          },
          {
                id:12,
                img_url:"https://i.pinimg.com/564x/66/8e/88/668e8873f66fa8c7d7e424b23d5f4b99.jpg",
                name:"Kajal"
          },
          {
                id:13,
                img_url:"https://i.pinimg.com/564x/3c/69/9c/3c699c971c6e6368e9a320730d6812e9.jpg",
                name:"Ashika"
          },
          {
                id:14,
                img_url:"https://i.pinimg.com/564x/b2/46/29/b246293f72ef071e909bb54a361f0c84.jpg",
                name:"Nivetha Pethuraj"
          }
        
          
    
    ]

function Heroines(){
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
                        : 
                        data.map(items =>(
                              <HeroineItems data={items} key={items.id}/>

                        ))
                  }
                </ul>
          </div>
)
            }

export default Heroines;