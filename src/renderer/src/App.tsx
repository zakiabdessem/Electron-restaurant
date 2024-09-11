import { Check, ChevronDown, Trash } from 'lucide-react'
import { Button } from './components/Button'
import { Popover, PopoverContent, PopoverTrigger } from './components/Popover'
import Layout from './Layout'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from './components/Command'
import { cn } from './lib/utils'
import { useState } from 'react'
import Soup1 from './assets/soup1.png'
import { ScrollArea } from './components/ScrollArea'

import { Table, TableCell, TableHeader, TableRow } from './components/Table'
import { Input } from './components/Input'
import OrderModel from './models/OrderModel'

function App(): JSX.Element {
  return (
    <Layout>
      <div className="py-2">
        <div className="flex justify-between items-center max-w-[720px]">
          <h1 className="text-white font-sans text-xl font-semibold">Choose Dishes</h1>
          <ComboboxDemo />
        </div>
        <div />
        <div className="flex justify-start px-2 h-[800px]">
          <ScrollArea hideScroll={false} className="h-[720px] w-[760px] rounded-md mb-0 my-6">
            <div className="grid grid-cols-3 gap-x-1 gap-24 py-24">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-2xl h-60 w-52 bg-[#1F1D2B] cursor-pointer"
                >
                  <img className="w-32 h-32 relative bottom-14" src={Soup1} alt="" />
                  <h1 className="text-md text-white font-sans text-center relative bottom-10 font-medium max-w-36">
                    Beef dumpling in hot and sour soup
                  </h1>
                  <h3 className="font-sans text-white relative bottom-5 text-lg">$ 2.99</h3>
                  <h4 className="font-sans text-gray-400 relative bottom-2">16 Bowls available</h4>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="bg-[#1F1D2B] max-w-96 w-[358px] h-[990px] left-1 px-1 bottom-56 relative right-0 p-8 pr-0 rounded-l-2xl">
            <h1 className="text-white font-sans font-semibold tracking-wide text-lg p-2 py-4">
              Orders #34562
            </h1>
            <div className="flex gap-x-2 p-2 py-4 pt-0 w-[214px]">
              <Button className="text-white bg-[#EA7C69] font-sans font-semibold w-[66px] h-[34px] px-2">
                Dine In
              </Button>
              <Button className="bg-[#1F1D2B] border-[#393C49] border font-sans font-semibold w-[66px] h-[34px] px-2">
                To Go
              </Button>
              <Button className="bg-[#1F1D2B] border-[#393C49] border font-sans font-semibold w-[66px] h-[34px] px-2">
                Delivery
              </Button>
            </div>
            <TableDemo />
          </div>
        </div>

        {/* <DrawerDemo /> */}
      </div>
    </Layout>
  )
}

function ComboboxDemo() {
  const frameworks = [
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
  ]

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('Dinein')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[100px] justify-between border-[#393C49] bg-[#1F1D2B] hover:bg-[#303443] hover:border-[#393C49] text-white"
        >
          {value ? frameworks.find((framework) => framework.value === value)?.label : 'Select'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="border-[#393C49] bg-[#2D303E]">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  className="border-[#393C49] bg-[#2D303E] hover:bg-[#2D303E] hover:border-[#393C49] text-white font-sans font-semibold"
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function TableDemo() {
  const invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      totalAmount: '$250.00',
      paymentMethod: 'Credit Card'
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Pending',
      totalAmount: '$150.00',
      paymentMethod: 'PayPal'
    },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      totalAmount: '$350.00',
      paymentMethod: 'Bank Transfer'
    },
    {
      invoice: 'INV004',
      paymentStatus: 'Paid',
      totalAmount: '$450.00',
      paymentMethod: 'Credit Card'
    },
    {
      invoice: 'INV005',
      paymentStatus: 'Paid',
      totalAmount: '$550.00',
      paymentMethod: 'PayPal'
    },
    {
      invoice: 'INV005',
      paymentStatus: 'Paid',
      totalAmount: '$550.00',
      paymentMethod: 'PayPal'
    }
  ]

  return (
    <Table>
      <TableHeader className="flex justify-center items-center w-full border-b border-[#393C49] pl-4">
        <div className="w-2/3 font-sans text-white font-semibold py-2">Item</div>
        <div className="w-1/4 relative left-8 font-sans text-white font-semibold">Qty</div>
        <div className="text-center w-1/3 relative left-2 font-sans text-white font-semibold">
          Price
        </div>
      </TableHeader>

      <ScrollArea hideScroll={true} type="hover" className="h-[620px] rounded-md mb-0 my-6">
        {invoices.map((invoice) => (
          <div className="flex flex-col justify-center items-center">
            <TableRow className="cursor-pointer hover:bg-transparent" key={invoice.invoice}>
              <TableCell className="font-medium w-full ">
                <div className="flex justify-center items-center">
                  <img src={Soup1} alt="" className="w-12 h-12 mr-2" />
                  <div className="flex flex-col">
                    <h1 className="text-white font-sans font-medium whitespace-nowrap">
                      Spicy seasoned sea...
                    </h1>
                    <div className="text-[#ABBBC2] font-sans font-medium whitespace-nowrap text-sm mt-1">
                      $ 2.29
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    className="text-white font-sans p-4 text-center border-[#393C49] bg-[#2D303E] border rounded-xl w-[49px]"
                    type="number"
                    id="quantity"
                    defaultValue="1"
                    min="1"
                  />
                </div>
              </TableCell>
              <TableCell className="text-right text-white font-sans font-medium whitespace-nowrap">
                $ 4,58
              </TableCell>
            </TableRow>
            <div className="flex justify-between items-center w-full py-1 pr-2">
              <Input
                className="text-[#E0E6E9] font-sans p-4 border-[#393C49] bg-[#2D303E] border rounded-xl w-full mx-2"
                type="text"
                id="detail"
                placeholder="Order Note..."
              />
              <Button className="hover:bg-[#2D303E] bg-transparent text-white border-[#EA7C69] border font-sans font-semibold w-[66px] h-[34px] px-2">
                <Trash color="#EA7C69" strokeWidth={1.4} />
              </Button>
            </div>
          </div>
        ))}
      </ScrollArea>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-between items-center w-full px-4">
          <h2 className="font-sans text-[#ABBBC2]">Discount</h2>
          <h3 className="font-sans text-white">$0</h3>
        </div>
        <div className="flex justify-between items-center w-full px-4 py-4">
          <h2 className="font-sans text-[#ABBBC2]">Sub total</h2>
          <h3 className="font-sans text-white">$0</h3>
        </div>
        <div className="flex justify-between items-center w-full px-4">
          <OrderModel
            OrderTable={
              <div>
                <ScrollArea hideScroll type="hover" className="h-[344px] rounded-md mb-0 my-6">
                  {invoices.map((invoice) => (
                    <div className="flex flex-col justify-center items-center">
                      <TableRow
                        className="cursor-pointer hover:bg-transparent"
                        key={invoice.invoice}
                      >
                        <TableCell className="font-medium w-full ">
                          <div className="flex justify-center items-center">
                            <img src={Soup1} alt="" className="w-12 h-12 mr-2" />
                            <div className="flex flex-col">
                              <h1 className="text-white font-sans font-medium whitespace-nowrap">
                                Spicy seasoned sea...
                              </h1>
                              <div className="text-[#ABBBC2] font-sans font-medium whitespace-nowrap text-sm mt-1">
                                $ 2.29
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input
                              className="text-white font-sans p-4 text-center border-[#393C49] bg-[#2D303E] border rounded-xl w-[49px]"
                              type="number"
                              id="quantity"
                              defaultValue="1"
                              min="1"
                            />
                          </div>
                        </TableCell>
                        <TableCell className="text-right text-white font-sans font-medium whitespace-nowrap">
                          $ 4,58
                        </TableCell>
                      </TableRow>
                      <div className="flex justify-between items-center w-full py-1 pr-2">
                        <Input
                          className="text-[#E0E6E9] font-sans p-4 border-[#393C49] bg-[#2D303E] border rounded-xl w-full mx-2"
                          type="text"
                          id="detail"
                          placeholder="Order Note..."
                        />
                        <Button className="hover:bg-[#2D303E] bg-transparent text-white border-[#EA7C69] border font-sans font-semibold w-[66px] h-[34px] px-2">
                          <Trash color="#EA7C69" strokeWidth={1.4} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="flex justify-between items-center w-full px-4">
                    <h2 className="font-sans text-[#ABBBC2]">Discount</h2>
                    <h3 className="font-sans text-white">$0</h3>
                  </div>
                  <div className="flex justify-between items-center w-full px-4 py-4">
                    <h2 className="font-sans text-[#ABBBC2]">Sub total</h2>
                    <h3 className="font-sans text-white">$0</h3>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </Table>
  )
}

export default App
