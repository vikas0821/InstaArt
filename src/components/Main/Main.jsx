import React from 'react'
import Artcard from './Artcard/Artcard'
import Sideprof from './Sidepro/Sideprof'

function Main({classname}) {
  return (
   <section  className={classname} >
        <div className=" w-full md:basis-1/2 ">
       
            <div  className=" h-screen overflow-auto scrollbar-hide whitespace-nowrap ">
              <div className="my-4 w-full p-5 shadow-sm shadow-zinc-400 bg-black rounded-lg mx-auto mt-10 cursor-pointer">
                <h1 className="text-center text-3xl text-yellow-50 ">Visit Art Gallary</h1>
              </div>
                <Artcard />
                <Artcard />
                
               
            </div>
        </div>
        <div className="main_right basis-1/2 hidden md:block">
                  <Sideprof/>

        </div>
   </section>
  )
}

export default Main
