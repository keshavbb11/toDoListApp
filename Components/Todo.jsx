import React from 'react'

const Todo = ({id,title,description,mongoId,complete,deleteTodo,completeTodo}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-500 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {id+1}
                </th>
                <td className="px-6 py-4">
                    {title}
                </td>
                <td className="px-6 py-4">
                    {description}
                </td>
                <td className="px-6 py-4">
                    {complete?"Completed":"Pending"}
                </td>
                <td className="px-6 py-4 flex flex-row gap-1 ">
                    <button onClick={()=>deleteTodo(mongoId)} className=' border-2 py-2 px-2 bg-white text-black'>Delete</button>
                    <button onClick={()=>completeTodo(mongoId)} className='border-2 py-2 px-2 bg-white text-black '>Done</button>
                </td>
            </tr>
  )
}

export default Todo
