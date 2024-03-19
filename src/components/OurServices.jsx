import React from 'react'

const ServiceCard = ({imgName, title, contentPara}) =>
    {
    return (
        <div className="para-font-regular flex flex-col items-center gap-4 w-full lg:w-[30%]">
            <div>
                <img 
                    src={`/images/${imgName}`}
                    alt="pizza image"
                    className='w-[10rem] h-[12rem] '
                /> 
            </div>
            <h3 className='btn-font-regular text-xl lg:text-[1.5rem] uppercase '> {title} </h3>
            <p className='px-2 lg:px-10 text-center'> {contentPara}</p>
        </div>
    )
}

function OurServices() {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-10 items-center pb-20 " >
        <ServiceCard title='Repas qualité' 
            contentPara='Un accompagnement parfait pour compléter votre repas.'
            imgName='fastfood.svg'
        />
        <ServiceCard title='Plat spécial ' 
            contentPara='Un plat complet pour répondre à tous vos besoins.'
            imgName='pizza.svg'
        />
        <ServiceCard title='Livraison Rapide' 
            contentPara='Contactez nous pour une expédition rapide de votre repas.'
            imgName='delivery.png'
        />
        
    </section>
  )
}

export default OurServices