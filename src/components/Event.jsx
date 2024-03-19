import React from 'react'

function Event() {
  return (
    <section className="text-gray-100 relative  h-auto lg:h-screen flex flex-col items-center content-center justify-center gap-2 px-14 py-36 lg:py-0 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('../images/bg-spicies.avif')" }} >
      <h3 className='mt-8 lg:mt-0 text-center text-xl lg:text-3xl text-yellow-500 uppercase sous-title-font-bold'> Menu Duo à Partager </h3>
      <h2 className='lg:w-[60%] title-font-regular text-2xl lg:text-[3rem] text-center uppercase leading-snug lg:leading-none'>Savourer en Duo, Économiser en Duo </h2>
      <p className='my-4 lg:my-2 px-1 lg:px-10 py-4 lg:py-8 para-font-regular w-full lg:w-[50%] text-center '> 
        Profitez de notre irrésistible offre spéciale "Menu Duo à Partager" et partagez un festin gourmand avec votre moitié, un ami ou un proche. 
      </p>
      <div className="b">
        <a href='./reservation' className='btn-font-regular lg:flex gap-1 bg-gray-50 text-red-500 rounded-lg px-8 py-5 hover:text-gray-50 font-bold  hover:bg-green-500 duration-700 '>
            Resérver maintenant <i className="bi bi-chevron-double-right"></i>
        </a>

      </div>
      <div className="flex flex-col content-start items-start ">
        
        <img 
            src='/images/semi-pizza.png'
            alt="semi pizza image"
            className='w-[20rem] h-[20rem] hidden lg:block rounded-10  z-10 absolute right-0 top-[20rem] '
            />                
      </div>
    </section>
  )
}

export default Event