import React from 'react'
import { NavLink } from 'react-router-dom'


function Footer() {
  return (
    <footer className="text-gray-100 flex flex-col lg:flex-row items-center lg:items-baseline justify-between gap-5 bg-gray-900 px-1 lg:px-[2rem] py-20">
        <div className="lg:border-none border-b pb-8 border-gray-800 flex flex-col gap-2 items-center lg:items-start lg:justify-start w-full lg:w-[33%] ">
            <div>
                <img 
                    src='/images/logo.svg'
                    alt="logo image"
                    className='w-30 h-50'
                /> 
            </div>
            <p className='w-[15rem] lg:w-[20rem]  text-center lg:text-left'> Pour une restauration rapide et de qualité, contactez le meilleur. </p>
            <div className="flex flex-col justify-start items-center lg:items-start">
                <p> <a href="mailto:mbolokobelieve@gmail.com">contact@FazFood.com</a></p>
                <p> <a href="tel:+243817723066">+243 817 723 066</a></p>

            </div>
        </div>

        <div className="flex flex-col gap-2 justify-start items-center lg:items-start  w-full lg:w-[33%] ">
            <h4 className='text-xl  sous-title-font-bold mb-2'>Nos produits</h4>
            <ul className="flex flex-col justify-start">
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Pizza XL</a>
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Burger MG</a>
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Double Combo</a>
                <a href="#" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Xl Combo</a>
            </ul>
        </div>

        <div className="flex flex-col gap-2 justify-start items-center lg:items-start w-full lg:w-[33%] ">
            <h4 className='text-xl  sous-title-font-bold mb-2'>Liens rapides</h4>
            <ul className="flex flex-col justify-start">
                <NavLink to="/" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Home</NavLink>
                <NavLink to="/menu" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Menu</NavLink>
                <NavLink to="/shop" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Shop</NavLink>
                <NavLink to="/reservation" className='hover:text-red-500 duration-500 font-semibold text-gray-400'>Réservation</NavLink>
            </ul>
        </div>

     
        <div className="flex flex-col gap-2 justify-start items-center lg:items-start  w-full lg:w-[33%] border-none lg:border-l-2 border-gray-400 pl-10">
            <h4 className='text-xl  sous-title-font-bold mb-2'>Heures d'ouverture</h4>
            <div className="flex flex-col justify-start text-gray-100 font-medium">
                <span > Lundi - Vendredi : <span className="text-red-500">8h - 21h</span> </span>
                <span > Samedi: <span className="text-red-500">12h - 21h</span> </span>
            </div>
            <div className="flex flex-row justify-start text-gray-100 gap-5 text-xl">
                <a href="" className="hover:text-red-500 duration-500 "><i className="bi bi-facebook"></i></a>
                <a href="" className="hover:text-red-500 duration-500 "><i className="bi bi-instagram"></i> </a>
                <a href="" className="hover:text-red-500 duration-500 "><i className="bi bi-twitter"></i> </a>
                <a href="" className="hover:text-red-500 duration-500 "><i className="bi bi-whatsapp"></i></a>
            </div>

        </div>
        
    </footer>
  )
}

export default Footer