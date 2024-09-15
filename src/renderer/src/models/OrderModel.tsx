import { Button } from '@renderer/components/Button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose
} from '@renderer/components/Drawer'
import { ScrollArea } from '@renderer/components/ScrollArea'
import { ArrowLeft, PlusIcon } from 'lucide-react'
import React from 'react'
import Wallet from '../assets/icons/wallet.svg'
import { Input } from '@renderer/components/Input'
import { Picker } from '@renderer/components/Picker'
import { ComboboxDemo } from '@renderer/components/ComboBox'

export default function OrderModel({ OrderTable }: { OrderTable: React.ReactElement }) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          className="w-full bg-[#EA7C69] text-white font-medium border-none font-sans"
          variant="outline"
        >
          Continue to Payment
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen px-2 top-0 right-0 left-auto mt-0 w-2/3 bg-[#1F1D2B] rounded-none">
        <DrawerHeader>
          <DrawerClose>
            <div className="w-8 h-8">
              <ArrowLeft
                className="hover:bg-gray-700 rounded-2xl p-1"
                color="white"
                width={25}
                height={25}
              />
            </div>
          </DrawerClose>
        </DrawerHeader>
        <ScrollArea hideScroll className="h-full">
          <div className="mx-auto w-full pl-5 h-screen">
            <div className="flex h-full w-full">
              <div className="w-1/2 px-2 pr-4">
                <header>
                  <DrawerHeader className="flex justify-between items-center border-b  border-[#393C49]">
                    <div>
                      <DrawerTitle className="text-2xl text-white font-sans font-semibold tracking-wide">
                        Confirmation
                      </DrawerTitle>
                      <DrawerDescription className="font-sans font-normal text-md text-[#ABBBC2] py-2 pb-0">
                        Orders #34562
                      </DrawerDescription>
                    </div>
                    <DrawerClose>
                      <Button className="bg-[#EA7C69]">
                        <PlusIcon color="white" />
                      </Button>
                    </DrawerClose>
                  </DrawerHeader>
                </header>
                <main>{OrderTable}</main>
              </div>
              <div className="w-1/2 border-l px-4 border-[#393C49]">
                <header>
                  <DrawerHeader className="flex justify-between items-center border-b  border-[#393C49]">
                    <div>
                      <DrawerTitle className="text-2xl text-white font-sans font-semibold tracking-wide">
                        Payment
                      </DrawerTitle>
                      <DrawerDescription className="font-sans font-normal text-md text-[#ABBBC2] py-2 pb-0">
                        Continue order
                      </DrawerDescription>
                    </div>
                  </DrawerHeader>
                </header>
                <main className=" my-6 h-[620px] rounded-md flex flex-col">
                  <div className="text-xl text-white font-sans font-semibold tracking-wide">
                    Payment Method
                  </div>
                  <div className="w-full py-2">
                    <Button
                      variant="ghost"
                      className="mt-2 h-full w-full flex flex-col justify-center items-center hover:bg-[#393c49d7]  border border-[#393C49]"
                    >
                      <img src={Wallet} className="w-6 h-6" alt="wallet" />
                      <div className="text-[#ABBBC2] font-sans font-semibold mt-1">Cash</div>
                    </Button>
                  </div>

                  <div className="w-full py-4">
                    <label htmlFor="phone">
                      <div className="text-md text-white font-sans font-medium tracking-wide mb-2">
                        Order Type
                      </div>
                    </label>
                    <div>
                      <Picker
                        list={[
                          {
                            value: 'Dinein',
                            label: 'Dine In'
                          },
                          {
                            value: 'Togo',
                            label: 'To Go'
                          },
                          {
                            value: 'Delivery',
                            label: 'Delivery'
                          }
                        ]}
                        className="w-[200px]"
                      />
                    </div>
                  </div>

                  <div className="w-full py-4">
                    <label htmlFor="phone">
                      <div className="text-md text-white font-sans font-medium tracking-wide mb-2">
                        Phone Number
                      </div>
                    </label>
                    <Input
                      className="text-[#E0E6E9] font-sans p-4 border-[#393C49] bg-[#2D303E] border rounded-md w-full"
                      type="number"
                      id="phone"
                      placeholder="eg. 05 60 00 00 01"
                    />
                  </div>

                  <div className="w-full py-4">
                    <label htmlFor="phone">
                      <div className="text-md text-white font-sans font-medium tracking-wide mb-2">
                        Table no.
                      </div>
                    </label>
                    <div>
                      <ComboboxDemo
                        className="w-full"
                        list={[
                          {
                            value: '1',
                            label: 'Table 1'
                          },
                          {
                            value: '2',
                            label: 'Table 2'
                          },
                          {
                            value: '3',
                            label: 'Table 3'
                          },
                          {
                            value: '4',
                            label: 'Table 4'
                          },
                          {
                            value: '5',
                            label: 'Table 5'
                          },
                          {
                            value: '6',
                            label: 'Table 6'
                          },
                          {
                            value: '7',
                            label: 'Table 7'
                          },
                          {
                            value: '8',
                            label: 'Table 8'
                          },
                          {
                            value: '9',
                            label: 'Table 9'
                          },
                          {
                            value: '10',
                            label: 'Table 10'
                          },
                          {
                            value: '11',
                            label: 'Table 11'
                          },
                          {
                            value: '12',
                            label: 'Table 12'
                          },
                          {
                            value: '13',
                            label: 'Table 13'
                          },
                          {
                            value: '14',
                            label: 'Table 14'
                          },
                          {
                            value: '15',
                            label: 'Table 15'
                          },
                          {
                            value: '16',
                            label: 'Table 16'
                          },
                          {
                            value: '17',
                            label: 'Table 17'
                          },
                          {
                            value: '18',
                            label: 'Table 18'
                          },
                          {
                            value: '19',
                            label: 'Table 19'
                          },
                          {
                            value: '20',
                            label: 'Table 20'
                          },
                          {
                            value: '21',
                            label: 'Table 21'
                          },
                          {
                            value: '22',
                            label: 'Table 22'
                          },
                          {
                            value: '23',
                            label: 'Table 23'
                          },
                          {
                            value: '24',
                            label: 'Table 24'
                          },
                          {
                            value: '25',
                            label: 'Table 25'
                          },
                          {
                            value: '26',
                            label: 'Table 26'
                          },
                          {
                            value: '27',
                            label: 'Table 27'
                          },
                          {
                            value: '28',
                            label: 'Table 28'
                          },
                          {
                            value: '29',
                            label: 'Table 29'
                          },
                          {
                            value: '30',
                            label: 'Table 30'
                          },
                          {
                            value: '31',
                            label: 'Table 31'
                          },
                          {
                            value: '32',
                            label: 'Table 32'
                          },
                          {
                            value: '33',
                            label: 'Table 33'
                          },
                          {
                            value: '34',
                            label: 'Table 34'
                          },
                          {
                            value: '35',
                            label: 'Table 35'
                          },
                          {
                            value: '36',
                            label: 'Table 36'
                          },
                          {
                            value: '37',
                            label: 'Table 37'
                          },
                          {
                            value: '38',
                            label: 'Table 38'
                          },
                          {
                            value: '39',
                            label: 'Table 39'
                          },
                          {
                            value: '40',
                            label: 'Table 40'
                          },
                          {
                            value: '41',
                            label: 'Table 41'
                          },
                          {
                            value: '42',
                            label: 'Table 42'
                          },
                          {
                            value: '43',
                            label: 'Table 43'
                          },
                          {
                            value: '44',
                            label: 'Table 44'
                          },
                          {
                            value: '45',
                            label: 'Table 45'
                          },
                          {
                            value: '46',
                            label: 'Table 46'
                          },
                          {
                            value: '47',
                            label: 'Table 47'
                          },
                          {
                            value: '48',
                            label: 'Table 48'
                          },
                          {
                            value: '49',
                            label: 'Table 49'
                          },
                          {
                            value: '50',
                            label: 'Table 50'
                          }
                        ]}
                      />
                    </div>
                  </div>

                  <div className="my-8 mb-2 flex flex-col justify-center items-center w-full">
                    <div className="flex justify-between items-center w-full">
                      <h2 className="font-sans text-[#ABBBC2]">Discount</h2>
                      <h3 className="font-sans text-white">$0</h3>
                    </div>
                    <div className="flex justify-between items-center w-full py-4">
                      <h2 className="font-sans text-[#ABBBC2]">Sub total</h2>
                      <h3 className="font-sans text-white">$0</h3>
                    </div>
                  </div>

                  <div className="flex justify-between items-center my-6">
                    <Button
                      className="w-full bg-transparent border border-[#EA7C69] text-[#EA7C69] font-medium font-sans mr-2"
                      variant="default"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="w-full bg-[#EA7C69] text-white font-medium border-none font-sans"
                      variant="outline"
                    >
                      Confirm Payment
                    </Button>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
