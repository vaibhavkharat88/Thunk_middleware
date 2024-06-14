import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Myuser } from '../Redux/UserSlice'

const GetUser = () => {
  const dispatch=useDispatch()
  const {isLoading,data,isError} =useSelector((state)=>state.user)
  console.log(data)

  useEffect(()=>{
    dispatch(Myuser())
  },[Myuser])
  return (
    <>
    <h1>Thunk Middleware second api</h1>
    {/* fetching an api with button */}
    {/* <button  onClick={()=>dispatch(Mytodos())}>Click me</button> */}
    
    {isLoading&& <p>..Loading</p>}
    
    {/* {isloading? <p>..loading</p>:null} */}
    {data&&(
      <ul>
        {data.map((items)=>(
          <li key={items.id}>{items.phone}</li>
        ))}
      </ul>
    )}
    {isError&&<p>Error Occured while fetching an api</p>}
    </>
  )
}

export default GetUser