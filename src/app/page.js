import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <header className="h-16 flex items-center gap-6 mx-16 my-5">
        <Link href="/">
          {" "}
          <Image src="/amaranth-logo.png" alt="logo" width={70} height={70} />
        </Link>

        <ul className="text-neutral-700 flex-auto flex justify-end gap-4 content-center p-2 font-extralight">
          <a href="/login">Sing In</a> / <a href="/sign-up">Sign Up</a>
        </ul>
      </header>
      <main className="justify-center items-center flex flex-col">
        <h1 className="w-3/5 mt-12 font-thin rounded-full from-neutral-600 text-stone-700 text-7xl justify-center content-start flex">
          {" "}
          Some 3D Models You Can{" "}
          <p className="text-pink-700 font-extrabold">, Find!</p>
        </h1>
        <input
          className="w-4/6 h-12 mt-14 mb-2 text-2xl font-extralight p-7 rounded-full border border-zinc-400"
          placeholder="Search..."
        ></input>
        <ul className="flex gap-6 m-14 text-white">
          <li className="bg-pink-700 rounded-full px-10 py-3 cursor-pointer hover:opacity-70">
            Furniture
          </li>
          <li className="bg-[#376672] rounded-full px-10 py-3 cursor-pointer hover:opacity-70">
            Decoration
          </li>
          <li className="bg-[#c48338] rounded-full px-10 py-3 cursor-pointer hover:opacity-70">
            Office
          </li>
          <li className="bg-pink-700 rounded-full px-10 py-3 cursor-pointer hover:opacity-70">
            Home
          </li>
          <li className="bg-[#82578d] rounded-full px-10 py-3 cursor-pointer hover:opacity-70">
            Outdoor
          </li>
          <li className="bg-pink-700 rounded-full px-10 py-3 cursor-pointer hover:opacity-70">
            Windows
          </li>
          <li className="bg-[#2b2b2b] rounded-full px-10 py-3 cursor-pointer hover:opacity-70">
            Tables
          </li>
        </ul>

        <div className="flex flex-col justify-center content-center items-center">
          {/* Grid starting */}
          <div className="grid grid-cols-4 gap-16 rounded-br-lg rounded-bl-lg justify-center my-16 [350px]:flex [350px]:flex-col">
            {/* Element starting */}
            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/4.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-700 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/1.png"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/2.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/3.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center content-center items-center">
          {/* Grid starting */}
          <div className="grid grid-cols-4 gap-16 rounded-br-lg rounded-bl-lg justify-center my-16">
            {/* Element starting */}
            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/3.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-700 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/7.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/4.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/2.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-700 flex flex-col justify-center content-center items-center w-full">
          <p className="bg-zinc-700 text-white text-9xl font-bold mr-[1500px] my-24 mb-36 w-36">
            Magage your 3D files...
          </p>
        </div>

        <div className="flex flex-col justify-center content-center items-center">
          {/* Grid starting */}
          <div className="grid grid-cols-4 gap-16 rounded-br-lg rounded-bl-lg justify-center my-16">
            {/* Element starting */}
            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/6.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-700 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/1.png"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/2.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/3.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center content-center items-center">
          {/* Grid starting */}
          <div className="grid grid-cols-4 gap-16 rounded-br-lg rounded-bl-lg justify-center my-16">
            {/* Element starting */}
            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/4.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-700 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/7.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/2.jpg"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col content-center rounded-2xl border-2 border-zinc-300">
              <div className="h-[500px] w-[400px] relative">
                <Image
                  className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
                  src="/1.png"
                  alt="logo"
                  fill
                ></Image>
              </div>
              <div className="grid grid-cols-9 bg-zinc-300 items-center justify-center h-[65px] text-white rounded-br-lg rounded-bl-lg px-5">
                <div className="text-zinc-600 col-span-6 font-bold text-md flex items-center justify-center border-e-2 h-full border-pink-700 cursor-pointer hover:text-slate-500">
                  Waiting Chair Next Room
                </div>
                <div className="col-span-3 items-center justify-center flex flex-row">
                  <div className="text-sm text-zinc-900 pl-4">4,99$</div>
                  <svg
                    class="bg-pink-700 rounded-full px-2 w-10 h-10 ml-2 text-white dark:text-white flex items-center justify-center cursor-pointer hover:opacity-70"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 m-20 text-white">
          <div className="bg-[#2d3031] rounded-full px-10 py-3 cursor-pointer hover:opacity-70">
            ver más
          </div>
        </div>

        <div className="flex flex-row gap-32 my-28">
          <div className="h-[800px] w-[500px] relative">
            <Image
              className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
              src="/1.png"
              alt="logo"
              fill
            ></Image>
          </div>
          <div className="h-[800px] w-[500px] relative">
            <Image
              className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
              src="/3.jpg"
              alt="logo"
              fill
            ></Image>
          </div>
          <div className="h-[800px] w-[500px] relative">
            <Image
              className="rounded-t-2xl object-cover flex items-center justify-center cursor-pointer hover:opacity-80"
              src="/7.jpg"
              alt="logo"
              fill
            ></Image>
          </div>
        </div>

        <p className="text-zinc-600 text-9xl font-bold w-36 mr-[1500px] my-24 mb-36">
          You can find more...
        </p>
      </main>
      <footer className="bg-neutral-800 row-start-3 flex gap-6 flex-wrap items-center justify-center h-1/4 text-slate-200 flex-col mt-10">
        <p>content-center cursor-pointer rounded-2xl border</p>
        is.sabrinadelvalle@gmail.com
      </footer>
    </div>
  );
}
