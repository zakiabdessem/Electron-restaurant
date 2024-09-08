import { ReactElement } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { InputSearch } from './components/InputSearch'

function Layout({ children }: { children: ReactElement | ReactElement[] | string }) {
  return (
    <div className="bg-primary h-fit w-[1268px]">
      {/* Main container */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar className="sticky" />

        {/* Main content */}
        <div className="flex flex-col w-full p-6 pr-0">
          {/* Header */}
          <div className="flex items-center justify-between max-w-[720px]">
            <div className="flex flex-col">
              <h1 className="font-sans text-white text-3xl font-semibold">Jaegar Resto</h1>
              <p className="font-sans text-gray-300 text-lg">Tuesday, 2 Feb 2021</p>
            </div>

            {/* Search input */}
            <div className="flex items-center">
              <InputSearch />
            </div>
          </div>

          {/* Navbar */}
          <Navbar className="mt-4 max-w-[950px]" />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
