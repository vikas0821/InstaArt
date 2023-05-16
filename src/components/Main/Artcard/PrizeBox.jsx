import React from 'react'

function PrizeBox() {
  return (
    <div class=" p-5 w-full bg-transparent hover:bg-zinc-600 h-40  absolute top-2/4 -translate-y-1/2 text-center">
      <div><i class="fa-solid fa-eye text-white text-3xl "></i></div>
      <div className=" text-white text-3xl"><p>Rs 20,000</p><sub className="line-through">Rs 50,000</sub></div>
    </div>
  )
}

export default PrizeBox
