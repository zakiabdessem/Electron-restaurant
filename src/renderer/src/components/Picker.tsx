import { Check, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "./Command";
import { cn } from "@renderer/lib/utils";
import { Button } from "./Button";
import { useState } from "react";

export function Picker({
  list,
  className
}: {
  className?: string
  list: { value: string; label: string }[]
}): JSX.Element {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('Dinein')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            ' justify-between border-[#393C49] bg-[#1F1D2B] hover:bg-[#303443] hover:border-[#393C49] text-white',
            className
          )}
        >
          {value ? list.find((item) => item.value === value)?.label : 'Select'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No Table found.</CommandEmpty>
            <CommandGroup className="border-[#393C49] bg-[#2D303E]">
              {list.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  className="border-[#393C49] bg-[#2D303E] hover:bg-[#2D303E] hover:border-[#393C49] text-white font-sans font-semibold w-full"
                  onSelect={(currentValue) => {
                    setValue(currentValue)
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
