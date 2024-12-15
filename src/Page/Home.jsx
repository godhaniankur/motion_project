import React,{useRef} from 'react'
import Cart from './Cart'


const Home = () => {
    const divref = useRef();
  return (
    <div ref={divref} className='relative bg-zinc-700/100 h-screen overflow-hidden '>
        <div className='absolute top-[30%] left-[50%] -translate-x-[50%] translate-y-[50%] text-9xl '>
            Draw Now
        </div>
        <div className=' absolute bg-zinc-500/50 w-full h-screen'></div>
        <div className=' absolute z-[2]'>
            <Cart referunce={divref}/>
        </div>
    </div>
  )
}

export default Home