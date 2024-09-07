import { cn } from '@renderer/lib/utils'
import { Button } from './Button'
import Logo from '../assets/Logo.svg'
import HomeIcon from '../assets/Home.svg'
import DiscountIcon from '../assets/Discount.svg'
import StatsIcon from '../assets/Statistics.svg'
import EmailIcon from '../assets/Email.svg'
import NotifIcon from '../assets/Notification.svg'
import SettingsIcon from '../assets/Settings.svg'
import LogoutIcon from '../assets/Logout.svg'
import { useState } from 'react'

function Sidebar({ className }) {
  const [active, setActive] = useState('Home')

  const onClick = (value) => {
    setActive(value)
  }

  return (
    <div className={cn('pb-12 bg-[#1F1D2B]  rounded-r-xl', className)}>
      <div className="space-y-4 py-4">
        <div className="py-2 pr-4">
          <div className="space-y-1">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl h-14 w-14 relative left-9 mb-4"
            >
              <img src={Logo} alt="" className=" justify-start h-14 w-14" />
            </Button>

            <div
              className={cn(
                active == 'Home' ? 'bg-primary' : 'bg-none hover:bg-primary',
                'h-24 relative w-24 left-4 rounded-l-2xl cursor-pointer'
              )}
            >
              <button
                onClick={() => {
                  onClick('Home')
                }}
                className="flex justify-center items-center rounded-xl h-full w-full hover:bg-none"
              >
                <div className="justify-start">
                  <img
                    src={HomeIcon}
                    alt="aw"
                    className="flex justify-center items-center h-14 w-14"
                  />
                </div>
              </button>
            </div>

            <div
              className={cn(
                active == 'Discount' ? 'bg-primary' : 'bg-none hover:bg-primary',
                'h-24 relative w-24 left-4 rounded-l-2xl cursor-pointer'
              )}
            >
              <button
                onClick={() => {
                  onClick('Discount')
                }}
                className="flex justify-center items-center rounded-xl h-full w-full hover:bg-none"
              >
                <div className="justify-start">
                  <img
                    src={DiscountIcon}
                    alt="aw"
                    className="flex justify-center items-center h-7 w-7"
                  />
                </div>
              </button>
            </div>

            <div
              className={cn(
                active == 'Stats' ? 'bg-primary' : 'bg-none hover:bg-primary',
                'h-24 relative w-24 left-4 rounded-l-2xl cursor-pointer'
              )}
            >
              <button
                onClick={() => {
                  onClick('Stats')
                }}
                className="flex justify-center items-center rounded-xl h-full w-full hover:bg-none"
              >
                <div className="justify-start">
                  <img
                    src={StatsIcon}
                    alt="aw"
                    className="flex justify-center items-center h-6 w-6"
                  />
                </div>
              </button>
            </div>

            <div
              className={cn(
                active == 'Email' ? 'bg-primary' : 'bg-none hover:bg-primary',
                'h-24 relative w-24 left-4 rounded-l-2xl cursor-pointer'
              )}
            >
              <button
                onClick={() => {
                  onClick('Email')
                }}
                className="flex justify-center items-center rounded-xl h-full w-full hover:bg-none"
              >
                <div className="justify-start">
                  <img
                    src={EmailIcon}
                    alt="aw"
                    className="flex justify-center items-center h-6 w-6"
                  />
                </div>
              </button>
            </div>

            <div
              className={cn(
                active == 'Notif' ? 'bg-primary' : 'bg-none hover:bg-primary',
                'h-24 relative w-24 left-4 rounded-l-2xl cursor-pointer'
              )}
            >
              <button
                onClick={() => {
                  onClick('Notif')
                }}
                className="flex justify-center items-center rounded-xl h-full w-full hover:bg-none"
              >
                <div className="justify-start">
                  <img
                    src={NotifIcon}
                    alt="aw"
                    className="flex justify-center items-center h-6 w-6"
                  />
                </div>
              </button>
            </div>

            <div
              className={cn(
                active == 'Settings' ? 'bg-primary' : 'bg-none hover:bg-primary',
                'h-24 relative w-24 left-4 rounded-l-2xl cursor-pointer'
              )}
            >
              <button
                onClick={() => {
                  onClick('Settings')
                }}
                className="flex justify-center items-center rounded-xl h-full w-full hover:bg-none"
              >
                <div className="justify-start">
                  <img
                    src={SettingsIcon}
                    alt="aw"
                    className="flex justify-center items-center h-6 w-6"
                  />
                </div>
              </button>
            </div>

            <div className="h-24 relative w-24 left-4 cursor-pointer hover:bg-primary">
              <div className="flex justify-center items-center rounded-xl h-full w-full hover:bg-none">
                <div className="justify-start">
                  <img
                    src={LogoutIcon}
                    alt="aw"
                    className="flex justify-center items-center h-6 w-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
