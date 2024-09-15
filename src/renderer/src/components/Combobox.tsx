'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { Button } from './Button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from './Command'
import { cn } from '@renderer/lib/utils'
import { ScrollArea } from './ScrollArea'

export function ComboboxDemo({
  list,
  className
}: {
  list: { value: string; label: string }[]
  className: string
}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'justify-between border border-[#393C49] bg-transparent text-white',
            className
          )}
        >
          {value ? list.find((item) => item.value === value)?.label : 'Select Table...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 border-[#393C49] bg-[#393C49]">
        <Command>
          <CommandInput className="text-white" placeholder="Search Table..." />
          <CommandList>
            <CommandEmpty>No Table found.</CommandEmpty>
            <CommandGroup>
              {list.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  className="hover:bg-[#393C49] text-white font-sans font-semibold w-full"
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === item.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
