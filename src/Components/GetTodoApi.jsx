import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Mytodos} from '../Redux/TodoSlice'

const GetTodoApi = () => {
  const dispatch=useDispatch()
  const {isloading,data,isError} =useSelector((state)=>state.todo)
  console.log(data)

  useEffect(()=>{
    dispatch(Mytodos())
  },[Mytodos])
  return (
    <>
    <h1>Thunk Middleware</h1>
    {/* fetching an api with button */}
    {/* <button  onClick={()=>dispatch(Mytodos())}>Click me</button> */}
    
    {isloading&& <p>..Loading</p>}
    
    {/* {isloading? <p>..loading</p>:null} */}
    {data&&(
      <ul>
        {data.todos.map((items)=>(
          <li key={items.id}>{items.todo}</li>
        ))}
      </ul>
    )}
    {isError&&<p>Error Occured while fetching an api</p>}
    </>
  )
}

export default GetTodoApi