import React from "react"
import Header from "../../components/header"
import { Footer } from "../../components/footer"


const Index: React.FC = () => {
  return (
    <>
      <Header/>
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
            </p>
          </div>
      </div>





      <Footer />
    </>
  )
}

export default Index