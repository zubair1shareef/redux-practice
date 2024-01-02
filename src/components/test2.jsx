import Context from '../context'
import React,{useContext,useEffect, useMemo, useState} from 'react'
import { Link } from 'react-router-dom'

function Test2(prop) {
    const runFunction=()=>{
        console.log("running")
    }
    const[d,setD]= useState()
    const[k,setK]= useState('')
    useEffect(() => {
    

      return () => {
        
      }
    }, [])
    
    const {dataSet,wishlist} = useContext(Context)

    const runF=useMemo(() => runFunction(), [k])
    const test=()=>{console.log('fsdf')}
  return (
    <>
    <Link to ='/'>{d}</Link>
    <Link to ='comp2'>comp2</Link>
    <input type="text"onChange={(e)=>setD(e.target.value)} />
    {d}{runF}
       <div>{dataSet}</div>
    <div>{wishlist}</div>
    </>
 
  )
}

export default Test2