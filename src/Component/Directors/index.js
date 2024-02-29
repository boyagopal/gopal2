import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


import DirectorItem from '../DirectorItem';
import './index.css'

const data =[
      {
            id:1,
            img_url:"https://i.pinimg.com/564x/d0/95/1d/d0951d0c327f3a42d7cbeb2513efa6d4.jpg",
            name:"Puri"

      },
      {
            id:2,
            img_url:"https://i.pinimg.com/564x/e7/9f/eb/e79feb255a067c57f7f98af114ce51cd.jpg",
            name:"Ram Gopal Varma"
      },
      {
            id:3,
            img_url:"https://i.pinimg.com/564x/5d/5f/0b/5d5f0b0a77eb0c10f3ee13958ea5edae.jpg",
            name:"Rajamouli"
      },
      {
            id:4,
            img_url:"https://i.pinimg.com/564x/4a/63/71/4a6371a5b5453ec9b9ca060517537b30.jpg",
            name:"Trivikam"
      },
      {
            id:5,
            img_url:"https://i.pinimg.com/564x/61/0f/19/610f1935f493f673909437e654a43aa2.jpg",
            name:"Prashanth Neel"
      },
      {
            id:6,
            img_url:"https://i.pinimg.com/564x/76/fe/1e/76fe1e0a4041f5365a5d2a554943b1b1.jpg",
            name:"Harish Shankar"
      },
      {
            id:7,
            img_url:"https://i.pinimg.com/564x/e5/42/9f/e5429feb019ca2737afec09197723b74.jpg",
            name:"Vamshi PaidiPally"
      },

      {
            id:8,
            img_url:"https://i.pinimg.com/564x/ab/fe/c9/abfec96cdad186bd580dd31e17c3e004.jpg",
            name:"Anil Ravipudi"
      },
      {
            id:9,
            img_url:"https://i.pinimg.com/564x/0f/e3/3a/0fe33a64b11fb87709d00630add0f968.jpg",
            name:"Koratala Shiva"
      },
      {
            id:10,
            img_url:"https://i.pinimg.com/564x/a6/77/27/a6772793de89eb3dce2113b6e468de04.jpg",
            name:"Boyapati"
      },
    
    
      

]

function Directors(){
      const [loading, setLoading] =useState(false)
      useEffect(()=>{
            setLoading(true)
            setTimeout(()=>{
                  setLoading(false)
            },1000)
      },[])

      return(
   
      <div className='heros-container'>
      <hi className="heading">Popular Directors</hi>
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
                    <DirectorItem data={items} key={items.id}/>

              ))
        }
      </ul>
</div>
)

      }
export default Directors;