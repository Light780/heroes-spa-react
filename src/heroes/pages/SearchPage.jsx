import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroByName } from '../helpers'
export const SearchPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''
  const heroes = getHeroByName(q)
  const showSearch = q.length === 0
  const showError = q.length !== 0 && heroes.length === 0

  const { searchText, onInputChange } = useForm({ searchText: q })
  const onSearchSubmit = (event) => {
    event.preventDefault()

    navigate(`?q=${searchText}`)
  }
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label='form'>
            <input
              type='text' onChange={onInputChange} placeholder='Search a hero'
              value={searchText} className='form-control' name='searchText' autoComplete='off'
            />
            <button className='btn btn-outline-primary mt-1'>
              Seach
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          <div aria-label='alertSearch' className='alert alert-primary animate__animated animate__fadeIn' style={{ display: showSearch ? '' : 'none' }}>
            Search a Hero
          </div>
          <div aria-label='alertError' className='alert alert-warning animate__animated animate__fadeIn' style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>
          {
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
        </div>
      </div>
    </>
  )
}
