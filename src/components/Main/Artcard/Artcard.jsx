import React from 'react'
import PrizeBox from './PrizeBox'

function Artcard() {
  return (
    <div className="my-4 shadow-sm shadow-zinc-400   mx-auto bg-black h-800 rounded-xl relative">
        <div className="flex justify-between pt-2 h-16 px-5">
            <div className="flex gap-2 justify-center ">
                 <div className="w-12 h-12 rounded-full bg-white"></div>
                <h1 className="text-white text-2xl pt-2 py-2 "> Lord ganesha</h1>
            </div>
            
            <div className=" p-2 ">
            <i class="fa-regular fa-bookmark text-2xl text-white "></i>
            </div>
        </div>
        <div className="h-4/5 overflow-hidden bg-zinc-800 ">
            <img className=" object-cover " src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>
        <div className="flex justify-between h-16 mt-2">
            <div className="text-center w-28">
                <span className="">
                <i class="fa-regular fa-heart text-2xl  text-white"></i>
                <p className="text-white">10,000 likes</p>
                </span> 
            </div>
            <div className="p-4 ">
                <span className="p-2 text-xl text-white">Add to Cart</span>
            </div>

        </div>
        <PrizeBox />
    </div>
  )
}

export default Artcard
