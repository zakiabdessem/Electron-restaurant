import { Check, ChevronDown } from 'lucide-react'
import { Button } from './components/Button'
import { Popover, PopoverContent, PopoverTrigger } from './components/Popover'
import Layout from './Layout'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from './components/Command'
import { cn } from './lib/utils'
import { useState } from 'react'

function App(): JSX.Element {
  return (
    <Layout>
      <div className="py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-sans text-xl font-semibold">Choose Dishes</h1>
          <ComboboxDemo />
        </div>
      </div>
    </Layout>
  )
}

export function ComboboxDemo() {
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
          className="w-[100px] justify-between border-[#393C49] bg-[#2D303E] hover:bg-[#2D303E] hover:border-[#393C49] text-white"
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

export default App
