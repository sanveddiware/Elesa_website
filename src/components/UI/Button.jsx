import React from "react"
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white",
        outline: "border border-gray-300 bg-white hover:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export function Button({ className, variant, ...props }) {
  return (
    <button className={buttonVariants({ variant, className })} {...props} />
  )
}
