import { Check, ChevronDown } from 'lucide-react'
import { Button } from './components/Button'
import { Popover, PopoverContent, PopoverTrigger } from './components/Popover'
import Layout from './Layout'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from './components/Command'
import { cn } from './lib/utils'
import { useState } from 'react'
import Soup1 from './assets/soup1.png'
import { ScrollArea } from './components/ScrollArea'

import OrderModel from './models/OrderModel'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from './components/Table'

function App(): JSX.Element {
  return (
    <Layout>
      <div className="py-2">
        <div className="flex justify-between items-center max-w-[720px]">
          <h1 className="text-white font-sans text-xl font-semibold">Choose Dishes</h1>
          <ComboboxDemo />
        </div>
        <div />
        <div className="flex justify-start px-2">
          <ScrollArea className="h-[600px] w-[770px] rounded-md mb-0 my-6">
            <div className="grid grid-cols-3 gap-x-1 gap-24 py-24">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-2xl h-60 w-52 bg-[#1F1D2B]"
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
          <div className="bg-[#1F1D2B] max-w-96 w-[348px] h-[850px] left-1 px-1 bottom-56 relative right-0 p-8 pr-0">
            <h1 className="text-white font-sans font-semibold tracking-wide text-lg p-6 py-4">
              Orders #34562
            </h1>
            <div className="flex gap-x-2 p-6 py-2 w-[214px]">
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
      invoice: 'INV006',
      paymentStatus: 'Pending',
      totalAmount: '$200.00',
      paymentMethod: 'Bank Transfer'
    },
    {
      invoice: 'INV007',
      paymentStatus: 'Unpaid',
      totalAmount: '$300.00',
      paymentMethod: 'Credit Card'
    }
  ]

  return (
    <Table>
      <TableHeader className="w-full">
        <TableRow className="w-full border-b border-[#393C49]">
          <TableHead className="w-2/3">Item</TableHead>
          <TableHead className="w-1/4">Qty</TableHead>
          <TableHead className="text-center w-1/3">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium w-full">
              <div className="flex justify-center items-center">
                <img src={Soup1} alt="" className="w-9 h-9 mr-2" />
                <div className="flex flex-col">
                  <h1 className="text-white font-sans font-medium whitespace-nowrap">
                    Spicy seasoned sea...
                  </h1>
                  <div className="text-[#ABBBC2] font-sans font-medium whitespace-nowrap text-xs mt-1">
                    $ 2.29
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="text-white font-sans p-3 px-4 border-[#393C49] bg-[#2D303E] border rounded-xl">
                4
              </div>
            </TableCell>
            <TableCell className="text-right text-white font-sans font-medium whitespace-nowrap">
              $ 4,58
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}

export default App
