import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen">
      <header className='h-16 flex items-center gap-6 mx-16 my-5'>
        <Link href='/'>        <Image src='/amaranth-logo.png' alt='logo' width={70} height={70} /></Link>

        <ul className='text-neutral-700 flex-auto flex justify-end gap-4 content-center p-2 font-extralight'>
          <a href='/login'>Sing In</a> / <a href='/sign-up'>Sign Up</a>
        </ul>
      </header>
      <main className="justify-center items-center flex flex-col">
        <h1 className='w-3/5 mt-12 font-thin rounded-full from-neutral-600 text-stone-700 text-7xl justify-center content-start flex'> Some 3D Models You Can  <p className='text-pink-700 font-extrabold'>, Find!</p></h1>
        <input className='w-4/6 h-12 mt-14 mb-2 text-2xl font-extralight p-7 rounded-full border border-zinc-400' placeholder='Search...'></input>
        <ul className='flex gap-6 m-10 text-white'>
          <li className='bg-pink-700 rounded-full px-10 py-3 cursor-pointer hover:opacity-70'>Furniture</li>
          <li className='bg-[#376672] rounded-full px-10 py-3 cursor-pointer hover:opacity-70'>Decoration</li>
          <li className='bg-[#c48338] rounded-full px-10 py-3 cursor-pointer hover:opacity-70'>Office</li>
          <li className='bg-pink-700 rounded-full px-10 py-3 cursor-pointer hover:opacity-70'>Home</li>
          <li className='bg-[#82578d] rounded-full px-10 py-3 cursor-pointer hover:opacity-70'>Outdoor</li>
          <li className='bg-pink-700 rounded-full px-10 py-3 cursor-pointer hover:opacity-70'>Windows</li>
          <li className='bg-[#2b2b2b] rounded-full px-10 py-3 cursor-pointer hover:opacity-70'>Tables</li>
        </ul>
        <ul>
          <ul className='grid grid-cols-4 gap-5 m-10'>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/1.png' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/3.jpg' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul>  </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/2.jpg' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul>  </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/7.jpg' alt='logo' width={390} height={350}></Image>  <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
          </ul>
          <ul className='grid grid-cols-4 gap-5 m-10 mt-16'>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/6.jpg' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/2.jpg' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/3.jpg' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/4.jpg' alt='logo' width={390} height={350}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
          </ul>
          <ul className='grid grid-cols-4 gap-5 m-10 mt-36'>
          <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/3.jpg' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
          <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/4.jpg' alt='logo' width={390} height={350}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/1.png' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/2.jpg' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            
          </ul>
          <ul className='grid grid-cols-4 gap-5 m-10 mt-28'>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/1.png' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/2.jpg' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/3.jpg' alt='logo' width={550} height={650}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
            <li className='flex flex-col flex-auto content-center h-[550px] w-[450px] cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/4.jpg' alt='logo' width={390} height={350}></Image> <ul className='bg-gray-800 flex mt-3 flex-row justify-center text-white py-4 rounded-br-lg rounded-bl-lg'> <div className='flex justify-center mx-4 text-sm font-bold'>Item Name Baudelaire</div> <li className='flex justify-end mx-4'>♥</li> <li className='flex justify-end mx-4'>Price: 2$</li> </ul> </li>
          </ul>
        </ul>
        <ul className='flex gap-6 m-20 text-white'>
          <li className='bg-[#2d3031] rounded-full px-10 py-3 cursor-pointer hover:opacity-70'>ver más</li>
        </ul>

        
      </main>
      <footer className="bg-neutral-800 row-start-3 flex gap-6 flex-wrap items-center justify-center h-1/4 text-slate-200 flex-col mt-10">
        <p>content-center cursor-pointer rounded-2xl border</p>
          is.sabrinadelvalle@gmail.com
      </footer>
    </div>
  );
}
