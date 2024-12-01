import Navbar from './Navbar'
import Container from './Hero'
import Projects from './About/page'
import Tools from './Contact/page'

export default function Home() {
  return (
    <div className='max-w-[1280px]'>
      <div className='w-10/12 mx-auto pt-4'>
        <Navbar/>
      </div>
      <Container/>

      <div id='projects' className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8'></div>
      <Projects/>
      <div id='tools' className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8'></div>
      <Tools/>
      <div className='w-10/12 mx-auto my-10'>
        <div className='flex items-start text-2xl text-neutral-300'><p className='text-5xl mr-2 mt-[2px]'>&#169;</p> @Rabifantasi<small className='mt-[2px] ml-2'>2023</small> </div>
      </div>
    </div>
  )
}