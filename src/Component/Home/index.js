import HomePage from '../HomePage';
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './index.css'

function Home(){
      const [loading, setLoading] =useState(false)
      useEffect(()=>{
            setLoading(true)
            setTimeout(()=>{
                  setLoading(false)
            },1000)
      },[])

      return(
          <div>
            {  loading ? 
                   <ClipLoader
                   color={'#33FFEC'}
                   loading={loading}
              
                   size={100}
                   aria-label="Loading Spinner"
                   data-testid="loader"
                 /> 
                 
                 : 
                <HomePage/>
}
          </div>
)
      }

export default Home;