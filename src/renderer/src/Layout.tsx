import { ReactElement } from 'react'
import Navbar from './components/Navbar'

function Layout({ children }: { children: ReactElement | ReactElement[] | string }) {
  return (
    <div className="bg-primary max-h-screen">
      <Navbar />

      {children}
    </div>
  )
}

export default Layout
