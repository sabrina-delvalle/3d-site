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
        <h1 className='w-3/5 mt-12 font-thin rounded-full from-neutral-600 text-stone-700 text-7xl justify-center content-start flex'> Some 3D Models You Can Find</h1>
        <input className='w-4/6 h-12 m-14 text-2xl font-extralight p-7 rounded-full border border-zinc-400' placeholder='Search...'></input>
        <ul>
          <ul className='grid grid-cols-4 gap-5 m-10'>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/1.png' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/3.jpg' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/2.jpg' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/7.jpg' alt='logo' width={390} height={350}></Image> </li>
          </ul>
          <ul className='grid grid-cols-4 gap-5 m-10'>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/6.jpg' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/2.jpg' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/3.jpg' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/4.jpg' alt='logo' width={390} height={350}></Image> </li>
          </ul>
          <ul className='grid grid-cols-4 gap-5 m-10'>
          <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/3.jpg' alt='logo' width={550} height={650}></Image> </li>
          <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/4.jpg' alt='logo' width={390} height={350}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/1.png' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/2.jpg' alt='logo' width={550} height={650}></Image> </li>
            
          </ul>
          <ul className='grid grid-cols-4 gap-5 m-10'>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/1.png' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/2.jpg' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/3.jpg' alt='logo' width={550} height={650}></Image> </li>
            <li className='h-[550px] w-[450px] content-center cursor-pointer rounded-2xl border hover:opacity-80'><Image src='/4.jpg' alt='logo' width={390} height={350}></Image> </li>
          </ul>
        </ul>

        
      </main>
      <footer className="bg-neutral-800 row-start-3 flex gap-6 flex-wrap items-center justify-center h-1/4 text-slate-200 flex-col">
        <p>content-center cursor-pointer rounded-2xl border</p>
          is.sabrinadelvalle@gmail.com
      </footer>
    </div>
  );
}
