import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styled from 'styled-components';

const HamburgerDiv = styled.div`
  transform: scale(0.7, 0.7);
  padding: 0.75rem 0 0 0 !important;
`;

const Header: React.VFC<{}> = () => {
  const [open, isOpen] = useState(false)
  const openHamburger = () => {
    isOpen(!open)
  }

  return (
    <>
      <div className="flex items-center justify-between flex-wrap bg-teal py-2 pl-2 pr-6 bg-black">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Image src={"/logo.jpg"} width={280} height={55} />
        </div>
        <div className="block lg:hidden">
          {open ?
            (
              <>
                <button onClick={openHamburger}
                        className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                  <svg className="h-3 w-3 bg-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                  </svg>
                </button>
                <div className={""}>
                  {/*<div className={"text-white"}>aaaaa</div>*/}
                </div>
              </>
            ):(
              <>
                <button onClick={openHamburger}
                        className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                <svg className="h-3 w-3 bg-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
                </button>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Header