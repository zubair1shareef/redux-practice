import React,{useEffect,useState,useRef,forwardRef,useImperativeHandle} from 'react'

const Test=forwardRef((prop,ref)=> {

    const [data, setdata] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{

      console.log(res)
         return res.json()}
      ).then(res=>{setdata(res)})
    
    }, [])

  
    useImperativeHandle(
        ref,
      () => ({printValue
      
      }),
      [],
    )
      const printValue=()=>{
            console.log(refe.current.value)
            refe.current.focus()
        }
    const refe = useRef(null)
 
    
  return (
    <div>
        <input ref={refe}/>
        <button >clcik</button>
       
    </div>
  )
})

export default Test