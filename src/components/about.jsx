import { NavLink, Outlet, Route, Routes } from "react-router-dom"

function Story() {
  return (
    <div className='p-10'> 
      <h2 className='text-2xl font-bold mb-3'>Our Story</h2>
      <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo. Sed at felis a enim efficitur bibendum. Curabitur ac ligula id odio efficitur tincidunt. Nulla facilisi. Donec ut velit a nisl convallis fermentum. Proin in nunc sed metus efficitur bibendum.</p>
    </div>
  )
}
function Team() {
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold mb-3'>Our Team</h2>
      <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo. Sed at felis a enim efficitur bibendum. Curabitur ac ligula id odio efficitur tincidunt. Nulla facilisi. Donec ut velit a nisl convallis fermentum. Proin in nunc sed metus efficitur bibendum.</p>
    </div>
  )
}
function Values() {
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold mb-3'>Our Values</h2>
      <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo. Sed at felis a enim efficitur bibendum. Curabitur ac ligula id odio efficitur tincidunt. Nulla facilisi. Donec ut velit a nisl convallis fermentum. Proin in nunc sed metus efficitur bibendum.</p>
    </div>
  )
}


function About() {
  const styling = ({ isActive }) => isActive ? 'underline decoration-yellow-300 decoration-4 underline-offset-4' : ''
  return (
    <>
    <div className='p-10'>
      <h1 className='text-3xl font-bold mb-5'>About Us</h1>
      <p className='text-lg text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur commodo. Sed at felis a enim efficitur bibendum. Curabitur ac ligula id odio efficitur tincidunt. Nulla facilisi. Donec ut velit a nisl convallis fermentum. Proin in nunc sed metus efficitur bibendum.</p>
    </div>
    <div className='flex justify-center gap-10 text-lg text-red-800 font-bold uppercase'>
      <NavLink className={styling} to="story">Our Story</NavLink>
      <NavLink className={styling} to="team">Our Team</NavLink>
      <NavLink className={styling} to="values">Our Values</NavLink>
    </div>
    <div className="mx-20 shadow-xl mt-6 shadow-red-100">
      <Outlet />
    </div>
    </>
  )
}

export {Story, Team, Values}
export default About