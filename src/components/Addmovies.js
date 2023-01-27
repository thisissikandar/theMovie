import { addDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert';
import { moviesRef } from '../firbase/Firebase';
// import Addmovies from './Addmovies';

const Addmovies = () => {
    const [form, setForm] = useState({
        title: "",
        year: "",
        discription:"",
        image:"",
    })
    const [loader, setLoader] = useState(false)
    const addMovie = async() =>{
        try {
            await addDoc(moviesRef,form);
            swal({ 
                title: "Successfully added",
                icon: "success",
                buttons: false,
                timer:3000
            })
        } catch (error) {
        setLoader(true)
        swal({ 
            title: error,
            icon: "error",
            buttons: false,
            timer:3000
        })
        
    }
    setLoader(false)
    }
  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-1">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add New Movies</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-200">Title</label>
            <input
            value={form.title}
            onChange={(e)=>setForm({...form, title: e.target.value})}
             type="text" id="name" name="name"
              className="w-full bg-gray-200 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 
              text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
               duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-200">Year</label>
            <input
            value={form.year}
            onChange={(e)=>setForm({...form, year: e.target.value})}
             type="email" id="email" name="email"
              className="w-full bg-gray-200 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200
               text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
                duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-200">Image Link</label>
            <input 
            value={form.image}
            onChange={(e)=>setForm({...form, image: e.target.value})}
            id="message" name="message"
             className="w-full bg-gray-200 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200
             text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
              duration-200 ease-in-out"></input>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-200">Discription</label>
            <textarea 
            value={form.discription}
            onChange={(e)=>setForm({...form, discription: e.target.value})}
            id="message" name="message" className="w-full bg-gray-100 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={addMovie} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {loader? <TailSpin height={25} color="white"/> :'Add Movie'}
            </button>
        </div>
        
      </div>
    </div>
  </div>
</section>
  )
}

export default Addmovies