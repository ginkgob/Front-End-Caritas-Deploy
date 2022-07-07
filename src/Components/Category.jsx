// import { Link } from 'react-router-dom';
import MentalHealthIcon from '../media/icons/MentalHealth'
import Eat from '../media/icons/Eat'
import Sport from '../media/icons/Sport'
import Sleep from '../media/icons/Sleep'


const Category = () => {

  const categories = ([
    {
      name: 'Sueño',
      icon: <Sleep/>,
      slug: 'sueno',
      color: 'text-[#FDF6EC]',
      bgColor: 'bg-[#FECF5E]'
    },{
      name: 'Nutrición',
      icon: <Eat/>,
      slug: 'nutricion',
      color: 'text-[#D45C33]',
      bgColor: 'bg-[#F8D1B4]'
    },{
      name: 'Deporte',
      icon: <Sport/>,
      slug: 'deporte',
      color: 'text-[#D45C33]',
      bgColor: 'bg-[#F8D1B4]'
    }, {
      name: 'Salud Mental',
      icon: <MentalHealthIcon/>,
      slug: 'saludmental',
      color: 'text-[#FDF6EC]',
      bgColor: 'bg-[#FECF5E]'
    }
  ])

  return (
    <section className='grid grid-cols-2 gap-4 p-6'>
      {categories.map( category => {
        return (                        
          <a key={category.name} href="/section" className='flex justify-center'>
            <div className={`${category.bgColor} flex flex-col items-center justify-center w-[130px] aspect-square rounded-3xl`}>
              <div className="flex item-center justify-center">
                {category.icon}
              </div>
              <p className={`${category.color} font-['Titan one']`}>
                {category.name}
              </p>
            </div>
          </a>
        )
      })}
    </section>
  )
}

export default Category