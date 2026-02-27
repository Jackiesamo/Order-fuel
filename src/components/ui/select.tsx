import * as React from "react"
import { cn } from "@/lib/utils"

const Select = ({ value, onValueChange, children }: { value: string; onValueChange: (value: string) => void; children: React.ReactNode }) => {
  return <div className="relative">{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child as any, { value, onValueChange }) : child)}</div>
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { value?: string; onValueChange?: (v: string) => void }>(
  ({ className, children, value, onValueChange, ...props }, ref) => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <button
          ref={ref}
          type="button"
          onClick={() => setOpen(!open)}
          className={cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)}
          {...props}
        >
          {children}
        </button>
        {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}
      </>
    )
  }
)
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ value }: { value?: string }) => <span>{value || 'Select...'}</span>

const SelectContent = ({ children, value, onValueChange }: { children: React.ReactNode; value?: string; onValueChange?: (v: string) => void }) => {
  return (
    <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-popover text-popover-foreground shadow-md">
      {React.Children.map(children, child => 
        React.isValidElement(child) ? React.cloneElement(child as any, { onValueChange }) : child
      )}
    </div>
  )
}

const SelectItem = ({ value, children, onValueChange }: { value: string; children: React.ReactNode; onValueChange?: (v: string) => void }) => {
  return (
    <div
      onClick={() => onValueChange?.(value)}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
