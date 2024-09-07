import { cn } from '@renderer/lib/utils'
import { Search } from 'lucide-react'
import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputSearch = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          placeholder="Search for food, coffee, etc.."
          className={cn(
            'flex h-10 w-full rounded-md border border-[#393C49] bg-[#2D303E] px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          style={{
            color: '#ABBBC2',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0.1'
          }}
          ref={ref}
          {...props}
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ABBBC2]">
          <Search height={16} width={16} />
        </span>
      </div>
    )
  }
)
InputSearch.displayName = 'InputSearch'

export { InputSearch }
