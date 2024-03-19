import React from 'react'

const PriceItem = ({product, price, detail}) => {
  return (
    <>
      <div className="flex flex-row justify-between text-xl font-semibold">
          <b className='uppercase'> {product} </b>
          <b className='text-red-500'>{price} </b>
      </div>
      <span  className='text-gray-500 mb-5'>{detail} </span>
    </>
  )
}

function MenuPrice() {
  return (
    <section className="pt-10  flex flex-col  justify-center gap-2   bg-gray-100 text-gray-800 h-auto " >
      <div className="flex flex-col lg:flex-row  my-2 lg:my-6 lg:w-full w-1/2">
        <div className="pl-5 lg:pl-12 flex flex-col justify-start lg:content-start lg:items-start ">
            <h4 className='text-sm  text-red-500 sous-title-font-bold mb-2 '>Explorer nos repas spéciaux </h4>
            <h2 className='title-font-regular text-3xl lg:text-[3.6rem] uppercase w-full lg:w-[40rem]  lg:leading-[3rem] leading-[1.5rem] text-left '>Nous aimons vous surprendre</h2>
        </div>
        <div className=' w-1/2'>
          <img 
              src='/images/pizzaimg.png'
              alt="pizza image"
              className='text-center w-[10rem] h-[8rem] '
          /> 
        </div>

      </div>
      
      <div className=" flex lg:flex-row flex-col justify-between content-start items-start gap-20">
        <div className='w-1/2 lg:block hidden'>
          <img 
              src='/images/burger-personne.jpg'
              alt="person eats image"
              className='w-full h-[26rem] '
              />
        </div>

        <div className="flex flex-col lg:justify-normal justify-center gap-4 w-full lg:w-1/2  py-6 px-5 lg:px-0">
          <div className="flex flex-col gap-2">
            <PriceItem detail='Elementum tempus egestas' price='15.5$'
            product='Triple burger' />
            <PriceItem detail='Elementum tempus egestas' price='20.5$'
            product='Pizza Fromage' />
            <PriceItem detail='Elementum tempus egestas' price='22.5$'
            product='Desert pour deux' />
            <PriceItem detail='Elementum tempus egestas' price='20.5$'
            product='2x Combo burger' />






          </div>
        </div>
      </div>

    </section>
  )
}
 
export default MenuPrice