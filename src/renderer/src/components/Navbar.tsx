import { cn } from '@renderer/lib/utils'
import { Tabs, TabsList, TabsTrigger } from './Tabs'

function Navbar({ className }: { className: string }) {
  return (
    <Tabs defaultValue={cn('account', className)}>
      <TabsList className="grid grid-cols-7 w-[800px]">
        <TabsTrigger className="text-white w-full text-left" value="Hot Dishes">
          Hot Dishes
        </TabsTrigger>
        <TabsTrigger className="text-white w-full" value="Cold Dishes">
          Cold Dishes
        </TabsTrigger>
        <TabsTrigger className="text-white w-full" value="Soup">
          Soup
        </TabsTrigger>
        <TabsTrigger className="text-white w-full" value="Grill">
          Grill
        </TabsTrigger>
        <TabsTrigger className="text-white w-full" value="Appetizer">
          Appetizer
        </TabsTrigger>
        <TabsTrigger className="text-white w-full" value="Dessert">
          Dessert
        </TabsTrigger>
        <div className="text-white w-full"></div>
      </TabsList>
    </Tabs>
  )
}

export default Navbar
