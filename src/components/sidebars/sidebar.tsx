
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar () {
  const [collapseShow] = useState('hidden')

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-blue z-50 flex flex-wrap items-center justify-between relative md:w-64 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none  rounded border border-solid border-transparent"
            type="button"
          >
            x
          </button>
          <Link href="/simulator/">
            <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 text-white">

              <Image src={'/logo.png'} alt="Current Image" width={600} height={110}/>

            </a>
          </Link>
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            <hr className="my-4 md:min-w-full" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/simulator/">
                  <a className="text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600 text-white">
                    Simulador
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/terms/">
                  <a className="text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600 text-white">
                    Terminos y condiciones
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
