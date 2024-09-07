import { ReactElement } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Input } from './components/Input'

function Layout({ children }: { children: ReactElement | ReactElement[] | string }) {
  return (
    <div className="bg-primary h-full ">
      <div className="flex">
        <Sidebar className="" />

        <div className="flex flex-col justify-center relative bottom-[278px] left-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <div className="font-sans text-white text-3xl font-semibold relative bottom-9">
                Jaegar Resto
              </div>
              <div className="font-sans text-gray-300 text-lg font-normal  relative bottom-8">
                Tuesday, 2 Feb 2021
              </div>
            </div>
            <div className="flex items-center relative right-24 bottom-6">
              <Input />
            </div>
          </div>

          <Navbar className="relative top-2" />
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
