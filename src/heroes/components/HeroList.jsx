import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './'

export const HeroList = ({ publlisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publlisher), [publlisher])
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {heroes && heroes.map(hero => <HeroCard key={hero.id} {...hero} />)}
    </div>
  )
}
