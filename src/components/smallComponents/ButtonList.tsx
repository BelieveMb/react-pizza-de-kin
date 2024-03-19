import React from 'react'

function ButtonList({nameBtn, iconName} ) {
  return (
        <a className='bg-gray-600 text-gray-100 hover:bg-gray-800 duration-300 px-8 py-4 rounded-xl cursor-pointer flex  content-center items-center gap-2'>
            <i className={`bi bi-${iconName}`}></i>
            {nameBtn}
        </a>
    )
}

export default ButtonList