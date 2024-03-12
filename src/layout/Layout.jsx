import { Outlet } from 'react-router-dom'
import ModaMixHeader from './ModaMixHeader'
import ModaMixFooter from './ModaMixFooter'

function Layout() {
  return (
    <div>
        <ModaMixHeader/>
        <Outlet/>
        <ModaMixFooter/> 
    </div>
  )
}

export default Layout
