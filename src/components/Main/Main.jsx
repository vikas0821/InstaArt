import React from 'react'

function Main({classname}) {
  return (
   <section  className={classname} >
        <div className="main_left basis-2/3">
       
            <div  className=" h-screen overflow-auto scrollbar-hide whitespace-nowrap">
              <div className="my-14 w-4/5 p-5 mt-4 shadow-sm shadow-zinc-400 bg-black rounded-lg mx-auto">
                <h1 className="text-center text-5xl text-yellow-50 ">Visit Art Gallary</h1>
              </div>
                
                <div className="my-8 shadow-sm shadow-zinc-400 w-4/5 mx-auto bg-black h-5/6 rounded-xl "></div>
                <div className="my-8 shadow-sm shadow-zinc-400 w-4/5 mx-auto bg-black h-5/6 rounded-xl  "></div>

            </div>
        </div>
        <div className="main_right basis-1/3 bg-red-500">

        </div>
   </section>
  )
}

export default Main
