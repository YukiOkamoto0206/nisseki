import React from "react"
import Link from "next/link"
import Image from "next/image"


const Header: React.VFC<{}> = () => {

  return (
    <>
      <div className="flex items-center justify-between flex-wrap bg-teal py-2 pl-2 pr-6 bg-black">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Image src={"/icon-logo.jpg"} width={280} height={55}/>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
      </div>
        {/*</Link>*/}
      {/*</header>*/}
    </>
  )
}

export default Header