"use client"
import Todo from "@/Components/todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function Home() {

   const [formData,setFormData] = useState({
      title:"",
      description:"",
      })
    const [todoData,setTodoData] = useState([]);
    const fetchTodos = async () =>{
        const response = await axios('/api');
        setTodoData(response.data.todos)
    }
    const deleteTodo = async (id)=>{
      const response= await axios.delete('/api',{
        params:{
          mongoId:id
        }
      })
      toast.success(response.data.msg);
      await fetchTodos();
    }
    const completeTodo = async (id) => {
      const response =  await axios.put('/api',{},{
        params:{
          mongoId:id
        }
      })
      toast.success(response.data.msg)
      fetchTodos();
    }
    useEffect(()=>{
      fetchTodos();
    },[])
   const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setFormData(form=>({...form,[name]:value}));
        console.log(formData)
      }
   const onSubmitHandler = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('/api',formData);
      toast.success(response.data.msg);
      setFormData({
        title:"",
        description:"",
      })
      await fetchTodos();
    } catch (error) {
      toast.error("error")
    }
   }
  return (
    <>
    <ToastContainer/>
      <form
  onSubmit={onSubmitHandler}
  className="flex flex-col items-center w-full max-w-2xl mx-auto px-4 py-6 space-y-4"
>
  <input
    value={formData.title}
    onChange={onChangeHandler}
    type="text"
    name="title"
    placeholder="Enter Title"
    className="w-full border-2 rounded-sm px-4 py-2"
  />

  <textarea
    value={formData.description}
    onChange={onChangeHandler}
    name="description"
    placeholder="Enter Description"
    className="w-full border-2 rounded-sm px-4 py-2 h-32 resize-none"
  ></textarea>

  <button
    type="submit"
    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-black text-white border-2 px-4 py-2 rounded-sm"
  >
    Add to the List
  </button>
</form>


      
<div className="flex justify-center px-4">
  <div className="relative overflow-x-auto w-full max-w-6xl">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
      <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-900 text-gray-100 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">Id</th>
          <th scope="col" className="px-4 py-3">Title</th>
          <th scope="col" className="px-4 py-3">Desciption</th>
          <th scope="col" className="px-4 py-3">Status</th>
          <th scope="col" className="px-4 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {todoData.map((item,index)=>{
          return <Todo key={index} id={index} title={item.title} description={item.description}  complete={item.isComplete} mongoId={item._id} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        })}
      </tbody>
    </table>
  </div>
</div>

    </>
  );
}
