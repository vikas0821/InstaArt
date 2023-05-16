import React from 'react'

function Sideprof() {
  return (
    <div className="h-3/4 w-full p-5">
        <div className="flex mt-8 p-2">
            <div className="w-12 h-12 bg-white rounded-full cursor-pointer"></div>
            <div className="mx-3">
                <h1 className="text-white cursor-pointer">vk356464</h1>
                <p className="text-zinc-400 cursor-pointer">vikas kannaaujiya</p>
            </div>
        </div>
        <div className="mt-4 ">
            <div className="w-full">
              <h1 className="text-3xl text-white text-center p-2 cursor-pointer border-white border-2 rounded-2xl">Upload your artwork </h1>
            </div>
            <div className=" w-full h-60 border-x-2 border-white text-white text-xl mt-12">
              <h1 className="text-center ">How to sell Paintings, Drawings and Handicrafts Online?</h1>
              <ol className=" pl-5 leading-10 text-white list-decimal list-inside">
                <li>Register with us</li>
                <li>Upload your artwork</li>
                <li>Order placed by buyer</li>
                <li>Payment to Artist</li>
              </ol>
            </div>
        </div>
        <footer className=" mt-20 border-zinc-600 border-t-2 pt-6 text-zinc-500 text-center">
              <div><h3 className="text-2xl">JOIN US </h3></div>
              <div><p className="text-xs">© 2023 MADE BY YMV</p></div>
        </footer>
      
    </div>
  )
}

export default Sideprof
