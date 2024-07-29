import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getById } from '../../reducers/todolist/todoListSlice';

const GetById = () => {
    let dispatch = useDispatch();
    let { id } = useParams();

    useEffect(()=>{
        dispatch(getById(id))
    },[])

    let data = useSelector((store) => store.todolist.dataById)

  return (
    <div>
        <div className="w-[100%]  drop-shadow-xl my-[100px] bg-gray-300">
        <div className='flex'>

        
        <div>
        <p>{data.title}</p>
        <img src={data.image} className='w-[300px] h-[500px]' alt="" />

        </div>
       
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K_3X5nSD_NY?si=GEUoPWIjd1bVMHMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>

        </div>

    </div>
  )
}

export default GetById