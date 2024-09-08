import { Button } from '@renderer/components/Button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@renderer/components/Drawer'
import { ScrollArea } from '@renderer/components/ScrollArea'

export default function OrderModel() {
  // const [goal, setGoal] = useState(350)

  // function onClick(adjustment: number) {
  //   setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  // }

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none">
        <ScrollArea hideScroll={false} className="h-screen">
          <div className="mx-auto w-full p-5">
            <DrawerHeader>
              <DrawerTitle>Theme Color Options</DrawerTitle>
              <DrawerDescription>
                * Selected option will be applied to all layout elements (navbar, toolbar, etc.).
                You can also create your own theme options and color schemes.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-4">
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 1</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 2</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 3</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 4</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 4</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 5</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 6</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 7</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 8</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 9</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 10</p>
              </div>
              <div className="bg-muted flex items-center justify-center rounded-lg h-32">
                <p>Image 11</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
