import { Outlet } from 'react-router-dom'
import MainHeader from '../mainHeader/MainHeader'

function PageWrapper() {
  return (
    <>
      <MainHeader />
      <div className="mt-13">
        <Outlet />
      </div>
    </>
  )
}

export default PageWrapper
