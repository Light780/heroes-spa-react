import { Routes, Route, Navigate } from 'react-router-dom'
import DcPage from '../heroes/pages/DCPage'
import MarvelPage from '../heroes/pages/MarvelPage'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPage />} />
        <Route path='*' element={<Navigate to='marvel' />} />
      </Routes>
    </>
  )
}

export default AppRouter
