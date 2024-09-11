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

export default function OrderModel({ OrderTable }: { OrderTable: React.ReactElement }) {
  // const [goal, setGoal] = useState(350)

  // function onClick(adjustment: number) {
  //   setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  // }

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="w-full bg-[#EA7C69] text-white font-medium" variant="outline">
          Continue to Payment
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-2/3 bg-[#1F1D2B] rounded-none">
        <DrawerHeader>
          <DrawerClose>
            <ArrowLeft
              className="hover:bg-gray-700 rounded-2xl p-1"
              color="white"
              width={25}
              height={25}
            />
          </DrawerClose>
        </DrawerHeader>
        <ScrollArea hideScroll className="h-screen">
          <div className="mx-auto w-full p-5">
            <div className="flex h-full w-full">
              <div className="w-1/2 px-4">
                <header>
                  <DrawerHeader className="flex justify-between items-center border-b  border-[#393C49]">
                    <div>
                      <DrawerTitle className="text-2xl text-white font-sans font-semibold tracking-wide">
                        Confirmation
                      </DrawerTitle>
                      <DrawerDescription className="font-sans">Orders #34562</DrawerDescription>
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
              <div className="w-1/2 border-l border-[#393C49]">
                <header>
                  <DrawerHeader>
                    <DrawerTitle>Theme Color Options</DrawerTitle>
                    <DrawerDescription>
                      * Selected option will be applied to all layout elements (navbar, toolbar,
                      etc.). You can also create your own theme options and color schemes.
                    </DrawerDescription>
                  </DrawerHeader>
                </header>
                <main></main>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
