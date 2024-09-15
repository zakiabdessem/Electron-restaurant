import { cn } from '@renderer/lib/utils'
import { Button } from './Button'
import Logo from '../assets/icons/Logo.svg'
import HomeActive from '../assets/icons/HomeActive.svg'
import Home from '../assets/icons/Home.svg'

import DiscountIcon from '../assets/icons/Discount.svg'
import DiscountActive from '../assets/icons/DiscountActive.svg'

import StatsIcon from '../assets/icons/Statistics.svg'
import StatsActiveIcon from '../assets/icons/StatisticsActive.svg'

import NotifIcon from '../assets/icons/Notification.svg'
import NotifActiveIcon from '../assets/icons/NotificationActive.svg'

import SettingsIcon from '../assets/icons/Settings.svg'
import SettingsActiveIcon from '../assets/icons/SettingsActive.svg'


import LogoutIcon from '../assets/icons/Logout.svg'
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
                    src={active == 'Home' ? HomeActive : Home}
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
                  <div className="relative">
                    <img
                      src={active == 'Discount' ? DiscountActive : DiscountIcon}
                      alt="aw"
                      className="flex justify-center items-center h-6 w-6 relative top-7 left-4 z-20"
                    />
                    <div
                      className={`${active == 'Discount' ? 'bg-[#EA7C69]' : 'bg-transparent'} rounded-xl h-14 w-14 relative z-0 bottom-3`}
                    ></div>
                  </div>
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
                  <div className="relative">
                    <img
                      src={active == 'Stats' ? StatsActiveIcon : StatsIcon}
                      alt="aw"
                      className="flex justify-center items-center h-6 w-6 relative top-7 left-4 z-20"
                    />
                    <div
                      className={`${active == 'Stats' ? 'bg-[#EA7C69]' : 'bg-transparent'} rounded-xl h-14 w-14 relative z-0 bottom-3`}
                    ></div>
                  </div>
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
                <div className="relative">
                  <img
                    src={active == 'Notif' ? NotifActiveIcon : NotifIcon}
                    alt="aw"
                    className="flex justify-center items-center h-6 w-6 relative top-7 left-4 z-20"
                  />
                  <div
                    className={`${active == 'Notif' ? 'bg-[#EA7C69]' : 'bg-transparent'} rounded-xl h-14 w-14 relative z-0 bottom-3`}
                  ></div>
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
                <div className="relative">
                  <img
                    src={active == 'Settings' ? SettingsActiveIcon : SettingsIcon}
                    alt="aw"
                    className="flex justify-center items-center h-6 w-6 relative top-7 left-4 z-20"
                  />
                  <div
                    className={`${active == 'Settings' ? 'bg-[#EA7C69]' : 'bg-transparent'} rounded-xl h-14 w-14 relative z-0 bottom-3`}
                  ></div>
                </div>
              </button>
            </div>

            <div className="h-24 relative w-24 left-4 cursor-pointer hover:bg-primary rounded-l-2xl">
              <div className="flex justify-center items-center h-full w-full hover:bg-none">
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
