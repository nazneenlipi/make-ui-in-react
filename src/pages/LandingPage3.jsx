import React from "react"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Faq from "../components/Faq"
import Button from "../shared/Button"
import Card from "../shared/Card"
import CardContent from "../shared/CardContent"
import {
  Upload,
  Users,
  CheckSquare,
  MessageSquare,
  FileUp,
  UserPlus,
  MessageCircle,
  Clock,
  Zap,
  FolderKanban,
  Play,
  ChevronRight,
  Mountain,
  Star,
  Menu,
  X,
} from "lucide-react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Utility function for conditional class names
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ")
  }

  // Additional icons that weren't in the imports but are used in the code
  const ChevronDown = ({ className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )

  const ArrowRight = ({ className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )

  // Accordion components
  const AccordionContext = React.createContext(null)

  const Accordion = ({
    children,
    type = "single",
    collapsible = false,
    value: controlledValue,
    defaultValue,
    onValueChange,
    className = "",
  }) => {
    const [value, setValue] = useState(controlledValue || defaultValue || null)

    const handleValueChange = (itemValue) => {
      if (type === "single") {
        setValue(collapsible && value === itemValue ? null : itemValue)
        onValueChange?.(collapsible && value === itemValue ? null : itemValue)
      }
    }

    return (
      <AccordionContext.Provider
        value={{
          value: controlledValue !== undefined ? controlledValue : value,
          onValueChange: handleValueChange,
        }}
      >
        <div className={className}>{children}</div>
      </AccordionContext.Provider>
    )
  }

  const AccordionItem = ({ children, value, className = "" }) => {
    return (
      <div className={cn("border-b", className)} data-value={value}>
        {children}
      </div>
    )
  }

  const AccordionTrigger = ({ children, className = "" }) => {
    const context = React.useContext(AccordionContext)
    const itemValue = React.useContext(React.createContext(null))

    if (!context) throw new Error("AccordionTrigger must be used within an Accordion")

    const isOpen = context.value === itemValue

    const handleClick = (event) => {
      const itemElement = event.currentTarget.closest("[data-value]")
      if (itemElement) {
        const value = itemElement.getAttribute("data-value")
        if (value) context.onValueChange(value)
      }
    }

    return (
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          className,
        )}
      >
        {children}
        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
    )
  }

  const AccordionContent = ({ children, className = "" }) => {
    const context = React.useContext(AccordionContext)
    const itemValue = React.useContext(React.createContext(null))

    if (!context) throw new Error("AccordionContent must be used within an Accordion")

    const isOpen = context.value === itemValue

    return (
      <div
        className={cn(
          "overflow-hidden text-sm transition-all",
          isOpen ? "animate-accordion-down" : "animate-accordion-up h-0",
          className,
        )}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    )
  }

  // Card Footer component (since it's used but not imported)
  const CardFooter = ({ children, className = "", ...props }) => {
    return (
      <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
        {children}
      </div>
    )
  }

  return (
    <>
      {/* Inline styles */}
      <style jsx global>{`
        /* CSS Variables */
        :root {
          --background: 0 0% 100%;
          --foreground: 240 10% 3.9%;
          --card: 0 0% 100%;
          --card-foreground: 240 10% 3.9%;
          --popover: 0 0% 100%;
          --popover-foreground: 240 10% 3.9%;
          --primary: 262.1 83.3% 57.8%;
          --primary-foreground: 210 20% 98%;
          --secondary: 240 4.8% 95.9%;
          --secondary-foreground: 240 5.9% 10%;
          --muted: 240 4.8% 95.9%;
          --muted-foreground: 240 3.8% 46.1%;
          --accent: 240 4.8% 95.9%;
          --accent-foreground: 240 5.9% 10%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 0 0% 98%;
          --border: 240 5.9% 90%;
          --input: 240 5.9% 90%;
          --ring: 262.1 83.3% 57.8%;
          --radius: 0.75rem;
        }

        /* Base styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        /* Animations */
        @keyframes accordion-down {
          from {
            height: 0;
          }
          to {
            height: var(--radix-accordion-content-height, 100%);
          }
        }

        @keyframes accordion-up {
          from {
            height: var(--radix-accordion-content-height, 100%);
          }
          to {
            height: 0;
          }
        }

        .animate-accordion-down {
          animation: accordion-down 0.2s ease-out;
        }

        .animate-accordion-up {
          animation: accordion-up 0.2s ease-out;
        }

        /* Utility classes */
        .flex {
          display: flex;
        }

        .flex-1 {
          flex: 1 1 0%;
        }

        .flex-col {
          flex-direction: column;
        }

        .items-center {
          align-items: center;
        }

        .justify-center {
          justify-content: center;
        }

        .justify-between {
          justify-content: space-between;
        }

        .gap-2 {
          gap: 0.5rem;
        }

        .gap-3 {
          gap: 0.75rem;
        }

        .gap-4 {
          gap: 1rem;
        }

        .gap-6 {
          gap: 1.5rem;
        }

        .gap-8 {
          gap: 2rem;
        }

        .gap-12 {
          gap: 3rem;
        }

        .h-2 {
          height: 0.5rem;
        }

        .h-3 {
          height: 0.75rem;
        }

        .h-4 {
          height: 1rem;
        }

        .h-5 {
          height: 1.25rem;
        }

        .h-6 {
          height: 1.5rem;
        }

        .h-8 {
          height: 2rem;
        }

        .h-10 {
          height: 2.5rem;
        }

        .h-12 {
          height: 3rem;
        }

        .h-16 {
          height: 4rem;
        }

        .h-20 {
          height: 5rem;
        }

        .w-2 {
          width: 0.5rem;
        }

        .w-3 {
          width: 0.75rem;
        }

        .w-4 {
          width: 1rem;
        }

        .w-5 {
          width: 1.25rem;
        }

        .w-6 {
          width: 1.5rem;
        }

        .w-8 {
          width: 2rem;
        }

        .w-10 {
          width: 2.5rem;
        }

        .w-12 {
          width: 3rem;
        }

        .w-16 {
          width: 4rem;
        }

        .w-20 {
          width: 5rem;
        }

        .w-fit {
          width: fit-content;
        }

        .w-full {
          width: 100%;
        }

        .max-w-[600px] {
          max-width: 600px;
        }

        .max-w-[700px] {
          max-width: 700px;
        }

        .max-w-3xl {
          max-width: 48rem;
        }

        .max-w-4xl {
          max-width: 56rem;
        }

        .flex-1 {
          flex: 1 1 0%;
        }

        .shrink-0 {
          flex-shrink: 0;
        }

        .grid {
          display: grid;
        }

        .grid-cols-1 {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }

        .grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .grid-cols-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .grid-cols-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .space-y-1 > * + * {
          margin-top: 0.25rem;
        }

        .space-y-2 > * + * {
          margin-top: 0.5rem;
        }

        .space-y-3 > * + * {
          margin-top: 0.75rem;
        }

        .space-y-4 > * + * {
          margin-top: 1rem;
        }

        .space-y-6 > * + * {
          margin-top: 1.5rem;
        }

        .space-x-2 > * + * {
          margin-left: 0.5rem;
        }

        .space-x-4 > * + * {
          margin-left: 1rem;
        }

        .rounded-md {
          border-radius: 0.375rem;
        }

        .rounded-lg {
          border-radius: 0.5rem;
        }

        .rounded-xl {
          border-radius: 0.75rem;
        }

        .rounded-2xl {
          border-radius: 1rem;
        }

        .rounded-full {
          border-radius: 9999px;
        }

        .border {
          border-width: 1px;
          border-style: solid;
          border-color: hsl(var(--border));
        }

        .border-0 {
          border-width: 0px;
        }

        .border-2 {
          border-width: 2px;
        }

        .border-t {
          border-top-width: 1px;
          border-top-style: solid;
          border-top-color: hsl(var(--border));
        }

        .border-b {
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: hsl(var(--border));
        }

        .border-transparent {
          border-color: transparent;
        }

        .border-primary\\/20 {
          border-color: hsla(var(--primary), 0.2);
        }

        .border-border\\/40 {
          border-color: hsla(var(--border), 0.4);
        }

        .bg-background {
          background-color: hsl(var(--background));
        }

        .bg-background\\/60 {
          background-color: hsla(var(--background), 0.6);
        }

        .bg-background\\/80 {
          background-color: hsla(var(--background), 0.8);
        }

        .bg-card {
          background-color: hsl(var(--card));
        }

        .bg-primary {
          background-color: hsl(var(--primary));
        }

        .bg-primary\\/5 {
          background-color: hsla(var(--primary), 0.05);
        }

        .bg-primary\\/10 {
          background-color: hsla(var(--primary), 0.1);
        }

        .bg-primary\\/20 {
          background-color: hsla(var(--primary), 0.2);
        }

        .bg-secondary {
          background-color: hsl(var(--secondary));
        }

        .bg-muted {
          background-color: hsl(var(--muted));
        }

        .bg-muted\\/30 {
          background-color: hsla(var(--muted), 0.3);
        }

        .bg-muted\\/50 {
          background-color: hsla(var(--muted), 0.5);
        }

        .bg-transparent {
          background-color: transparent;
        }

        .bg-white {
          background-color: white;
        }

        .bg-black\\/20 {
          background-color: rgba(0, 0, 0, 0.2);
        }

        .bg-white\\/10 {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .bg-red-400 {
          background-color: #f87171;
        }

        .bg-blue-400 {
          background-color: #60a5fa;
        }

        .bg-green-400 {
          background-color: #4ade80;
        }

        .bg-yellow-400 {
          background-color: #facc15;
        }

        .bg-red-500 {
          background-color: #ef4444;
        }

        .bg-yellow-500 {
          background-color: #eab308;
        }

        .bg-green-500 {
          background-color: #22c55e;
        }

        .bg-green-500\\/10 {
          background-color: rgba(34, 197, 94, 0.1);
        }

        .text-primary {
          color: hsl(var(--primary));
        }

        .text-primary-foreground {
          color: hsl(var(--primary-foreground));
        }

        .text-secondary-foreground {
          color: hsl(var(--secondary-foreground));
        }

        .text-muted-foreground {
          color: hsl(var(--muted-foreground));
        }

        .text-foreground {
          color: hsl(var(--foreground));
        }

        .text-foreground\\/70 {
          color: hsla(var(--foreground), 0.7);
        }

        .text-white {
          color: white;
        }

        .text-green-500 {
          color: #22c55e;
        }

        .text-yellow-500 {
          color: #eab308;
        }

        .text-transparent {
          color: transparent;
        }

        .fill-yellow-500 {
          fill: #eab308;
        }

        .text-xs {
          font-size: 0.75rem;
          line-height: 1rem;
        }

        .text-sm {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }

        .text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }

        .text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }

        .text-2xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        .text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }

        .text-4xl {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }

        .text-5xl {
          font-size: 3rem;
          line-height: 1;
        }

        .text-6xl {
          font-size: 3.75rem;
          line-height: 1;
        }

        .font-medium {
          font-weight: 500;
        }

        .font-semibold {
          font-weight: 600;
        }

        .font-bold {
          font-weight: 700;
        }

        .tracking-tighter {
          letter-spacing: -0.05em;
        }

        .leading-none {
          line-height: 1;
        }

        .leading-tight {
          line-height: 1.25;
        }

        .italic {
          font-style: italic;
        }

        .p-1 {
          padding: 0.25rem;
        }

        .p-1\\.5 {
          padding: 0.375rem;
        }

        .p-2 {
          padding: 0.5rem;
        }

        .p-3 {
          padding: 0.75rem;
        }

        .p-4 {
          padding: 1rem;
        }

        .p-6 {
          padding: 1.5rem;
        }

        .p-8 {
          padding: 2rem;
        }

        .px-2 {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        .px-2\\.5 {
          padding-left: 0.625rem;
          padding-right: 0.625rem;
        }

        .px-3 {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }

        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .px-8 {
          padding-left: 2rem;
          padding-right: 2rem;
        }

        .py-0 {
          padding-top: 0;
          padding-bottom: 0;
        }

        .py-0\\.5 {
          padding-top: 0.125rem;
          padding-bottom: 0.125rem;
        }

        .py-1 {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .py-2 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .py-4 {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        .py-6 {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

        .py-8 {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        .py-12 {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }

        .py-16 {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        .py-20 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .py-24 {
          padding-top: 6rem;
          padding-bottom: 6rem;
        }

        .py-32 {
          padding-top: 8rem;
          padding-bottom: 8rem;
        }

        .pt-0 {
          padding-top: 0;
        }

        .pt-2 {
          padding-top: 0.5rem;
        }

        .pt-4 {
          padding-top: 1rem;
        }

        .pt-6 {
          padding-top: 1.5rem;
        }

        .pt-8 {
          padding-top: 2rem;
        }

        .pt-12 {
          padding-top: 3rem;
        }

        .pb-4 {
          padding-bottom: 1rem;
        }

        .m-0 {
          margin: 0;
        }

        .m-auto {
          margin: auto;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .my-4 {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        .mt-1 {
          margin-top: 0.25rem;
        }

        .mt-2 {
          margin-top: 0.5rem;
        }

        .mt-4 {
          margin-top: 1rem;
        }

        .mt-6 {
          margin-top: 1.5rem;
        }

        .mt-8 {
          margin-top: 2rem;
        }

        .mb-1 {
          margin-bottom: 0.25rem;
        }

        .mb-2 {
          margin-bottom: 0.5rem;
        }

        .mb-4 {
          margin-bottom: 1rem;
        }

        .mb-6 {
          margin-bottom: 1.5rem;
        }

        .mb-8 {
          margin-bottom: 2rem;
        }

        .mb-12 {
          margin-bottom: 3rem;
        }

        .mr-2 {
          margin-right: 0.5rem;
        }

        .-mt-4 {
          margin-top: -1rem;
        }

        .-mr-4 {
          margin-right: -1rem;
        }

        .-space-x-2 > * + * {
          margin-left: -0.5rem;
        }

        .overflow-hidden {
          overflow: hidden;
        }

        .text-center {
          text-align: center;
        }

        .text-left {
          text-align: left;
        }

        .font-medium {
          font-weight: 500;
        }

        .font-semibold {
          font-weight: 600;
        }

        .font-bold {
          font-weight: 700;
        }

        .uppercase {
          text-transform: uppercase;
        }

        .capitalize {
          text-transform: capitalize;
        }

        .italic {
          font-style: italic;
        }

        .leading-none {
          line-height: 1;
        }

        .leading-tight {
          line-height: 1.25;
        }

        .tracking-tighter {
          letter-spacing: -0.05em;
        }

        .underline {
          text-decoration: underline;
        }

        .no-underline {
          text-decoration: none;
        }

        .opacity-25 {
          opacity: 0.25;
        }

        .opacity-50 {
          opacity: 0.5;
        }

        .opacity-75 {
          opacity: 0.75;
        }

        .shadow-sm {
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .shadow-md {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .shadow-lg {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .shadow-xl {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .blur-md {
          filter: blur(12px);
        }

        .blur-3xl {
          filter: blur(64px);
        }

        .backdrop-blur-md {
          backdrop-filter: blur(12px);
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }

        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        .transition-colors {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        .transition-transform {
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        .duration-200 {
          transition-duration: 200ms;
        }

        .duration-300 {
          transition-duration: 300ms;
        }

        .duration-1000 {
          transition-duration: 1000ms;
        }

        .rotate-180 {
          transform: rotate(180deg);
        }

        .scale-105 {
          transform: scale(1.05);
        }

        .hover\\:bg-primary\\/5:hover {
          background-color: hsla(var(--primary), 0.05);
        }

        .hover\\:bg-primary\\/90:hover {
          background-color: hsla(var(--primary), 0.9);
        }

        .hover\\:bg-accent:hover {
          background-color: hsl(var(--accent));
        }

        .hover\\:bg-white\\/20:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .hover\\:text-primary:hover {
          color: hsl(var(--primary));
        }

        .hover\\:text-accent-foreground:hover {
          color: hsl(var(--accent-foreground));
        }

        .hover\\:underline:hover {
          text-decoration: underline;
        }

        .hover\\:shadow-lg:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .hover\\:shadow-xl:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .group:hover .group-hover\\:bg-primary\\/20 {
          background-color: hsla(var(--primary), 0.2);
        }

        .group:hover .group-hover\\:text-primary {
          color: hsl(var(--primary));
        }

        .group:hover .group-hover\\:opacity-50 {
          opacity: 0.5;
        }

        .group:hover .group-hover\\:text-primary\\/20 {
          color: hsla(var(--primary), 0.2);
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .z-10 {
          z-index: 10;
        }

        .z-50 {
          z-index: 50;
        }

        .-z-10 {
          z-index: -10;
        }

        .absolute {
          position: absolute;
        }

        .relative {
          position: relative;
        }

        .sticky {
          position: sticky;
        }

        .inset-0 {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        .inset-1 {
          top: 0.25rem;
          right: 0.25rem;
          bottom: 0.25rem;
          left: 0.25rem;
        }

        .-inset-1 {
          top: -0.25rem;
          right: -0.25rem;
          bottom: -0.25rem;
          left: -0.25rem;
        }

        .top-0 {
          top: 0;
        }

        .right-0 {
          right: 0;
        }

        .bottom-0 {
          bottom: 0;
        }

        .left-0 {
          left: 0;
        }

        .-top-4 {
          top: -1rem;
        }

        .container {
          width: 100%;
          margin-right: auto;
          margin-left: auto;
          padding-right: 1rem;
          padding-left: 1rem;
        }

        @media (min-width: 640px) {
          .container {
            max-width: 640px;
          }
          .sm\\:flex-row {
            flex-direction: row;
          }
          .sm\\:gap-4 {
            gap: 1rem;
          }
          .sm\\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .sm\\:text-5xl {
            font-size: 3rem;
            line-height: 1;
          }
        }

        @media (min-width: 768px) {
          .container {
            max-width: 768px;
          }
          .md\\:flex {
            display: flex;
          }
          .md\\:hidden {
            display: none;
          }
          .md\\:h-20 {
            height: 5rem;
          }
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .md\\:flex-row {
            flex-direction: row;
          }
          .md\\:gap-12 {
            gap: 3rem;
          }
          .md\\:px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .md\\:py-8 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .md\\:py-16 {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          .md\\:py-24 {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          .md\\:text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          .md\\:text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .md\\:mt-0 {
            margin-top: 0;
          }
          .md\\:block {
            display: block;
          }
        }

        @media (min-width: 1024px) {
          .container {
            max-width: 1024px;
          }
          .lg\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
          .lg\\:gap-8 {
            gap: 2rem;
          }
          .lg\\:gap-16 {
            gap: 4rem;
          }
          .lg\\:py-20 {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
          .lg\\:py-32 {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
          .lg\\:text-5xl {
            font-size: 3rem;
            line-height: 1;
          }
          .lg\\:text-6xl {
            font-size: 3.75rem;
            line-height: 1;
          }
        }

        /* Background grid pattern */
        .bg-grid-small-black {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='8' height='8' fill='none' stroke='%23000000'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E");
        }

        /* Gradient text */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }

        .bg-gradient-to-r {
          background-image: linear-gradient(to right, var(--tw-gradient-stops));
        }

        .bg-gradient-to-b {
          background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
        }

        .bg-gradient-to-br {
          background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
        }

        .from-primary {
          --tw-gradient-from: hsl(var(--primary));
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsla(var(--primary), 0));
        }

        .from-background {
          --tw-gradient-from: hsl(var(--background));
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsla(var(--background), 0));
        }

        .from-foreground {
          --tw-gradient-from: hsl(var(--foreground));
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsla(var(--foreground), 0));
        }

        .from-primary\\/5 {
          --tw-gradient-from: hsla(var(--primary), 0.05);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsla(var(--primary), 0));
        }

        .to-purple-600 {
          --tw-gradient-to: #9333ea;
        }

        .to-purple-600\\/5 {
          --tw-gradient-to: rgba(147, 51, 234, 0.05);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsla(var(--primary), 0));
        }

        .to-purple-600\\/90 {
          --tw-gradient-to: rgba(147, 51, 234, 0.9);
        }

        .to-muted\\/30 {
          --tw-gradient-to: hsla(var(--muted), 0.3);
        }

        .to-foreground\\/70 {
          --tw-gradient-to: hsla(var(--foreground), 0.7);
        }

        .aspect-video {
          aspect-ratio: 16 / 9;
        }

        .aspect-square {
          aspect-ratio: 1 / 1;
        }

        .aspect-\\[4\\/3\\] {
          aspect-ratio: 4 / 3;
        }

        .min-h-screen {
          min-height: 100vh;
        }

        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>

      <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
        {/* Header */}
        <header
          className={cn(
            "sticky top-0 z-50 transition-all duration-300",
            isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
          )}
        >
          <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Mountain className="h-5 w-5" />
              </div>
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                TestCollab
              </span>
            </div>

            <nav className="hidden md:flex gap-8">
              <Link to="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="#faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button variant="ghost" className="font-medium">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-primary py-2 px-3 to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
                Get Started
              </button>
            </div>
            <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-background border-b">
              <div className="container py-4 px-4 flex flex-col gap-4">
                <Link
                  to="#features"
                  className="text-sm font-medium py-2 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="#how-it-works"
                  className="text-sm font-medium py-2 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  to="#pricing"
                  className="text-sm font-medium py-2 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="#faq"
                  className="text-sm font-medium py-2 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="flex flex-col gap-2 pt-2 border-t">
                  <button variant="outline" className="w-full justify-start">
                    Sign In
                  </button>
                  <button className="w-full justify-start bg-gradient-to-r from-primary to-purple-600">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[40rem] h-[40rem] rounded-full bg-gray-200 blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 relative">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
                    <span>New Features Available</span>
                  </div>
                  <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                    Revolutionize Manual Software Testing Collaboration
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your testing process with an interactive SaaS platform for testers and developers.
                  </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      size="lg"
                      className="h-12 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    >
                      Get Started for Free
                    </button>
                    <button size="lg" variant="outline" className="h-12 px-8 border hover:bg-primary/5">
                      Request a Demo
                    </button>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            `h-8 w-8 rounded-full border-2 border-background`,
                            ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400"][i],
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">500+</span> teams already using TestCollab
                    </p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-md opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative rounded-xl overflow-hidden border shadow-xl bg-background">
                    <div className="absolute top-0 left-0 right-0 h-12 bg-muted/80 backdrop-blur-sm flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-medium text-center w-full">TestCollab Dashboard</div>
                    </div>
                    <div className="pt-12 p-4 aspect-[4/3] bg-muted/30 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-4 w-full h-full p-2">
                        <div className="bg-background rounded-lg p-3 flex flex-col gap-2 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-sm">Test Cases</div>
                            <div className="text-xs px-2 py-0.5 bg-gray-200 text-primary rounded-full">42</div>
                          </div>
                          <div className="flex-1 flex flex-col gap-1.5 mt-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="bg-muted h-6 rounded-md"></div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-background rounded-lg p-3 flex flex-col gap-2 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-sm">Comments</div>
                            <div className="text-xs px-2 py-0.5 bg-gray-200 text-primary rounded-full">12</div>
                          </div>
                          <div className="flex-1 flex flex-col gap-1.5 mt-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="bg-muted h-6 rounded-md"></div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-background rounded-lg p-3 flex flex-col gap-2 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-sm">Team</div>
                            <div className="text-xs px-2 py-0.5 bg-gray-200 text-primary rounded-full">8</div>
                          </div>
                          <div className="flex-1 flex flex-col gap-1.5 mt-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="bg-muted h-6 rounded-md"></div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-background rounded-lg p-3 flex flex-col gap-2 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div className="font-medium text-sm">Progress</div>
                            <div className="text-xs px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full">78%</div>
                          </div>
                          <div className="flex-1 flex flex-col gap-1.5 mt-2">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="bg-muted h-6 rounded-md"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brands Section */}
          <section className="w-full py-12 border-y border-gray-200">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <p className="text-sm text-muted-foreground">TRUSTED BY INNOVATIVE COMPANIES</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                  {["Microsoft", "Google", "Airbnb", "Spotify", "Slack"].map((brand) => (
                    <div key={brand} className="text-xl font-semibold text-muted-foreground/60">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="features" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />

            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-200 text-primary">
                  <span>Features</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                  Why Choose Our Platform?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Powerful features designed to streamline your testing workflow
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    icon: <Upload className="h-6 w-6 text-primary" />,
                    title: "Upload/Import Test Cases",
                    description: "Easily import test cases from CSV files with preformatted templates",
                  },
                  {
                    icon: <CheckSquare className="h-6 w-6 text-primary" />,
                    title: "Interactive Test Cases",
                    description: "Add interactivity with a flexible UI for better test management",
                  },
                  {
                    icon: <Users className="h-6 w-6 text-primary" />,
                    title: "Collaboration Tools",
                    description: "Enable real-time communication between testers and developers",
                  },
                  {
                    icon: <UserPlus className="h-6 w-6 text-primary" />,
                    title: "User Acceptance Testing",
                    description: "Manage UAT entities effectively with interactive checklists",
                  },
                  {
                    icon: <MessageSquare className="h-6 w-6 text-primary" />,
                    title: "Commenting & Feedback",
                    description: "Centralized feedback for seamless communication between team members",
                  },
                  {
                    icon: <FolderKanban className="h-6 w-6 text-primary" />,
                    title: "Test Case Management",
                    description: "Organize projects, suites, and cases effortlessly in one place",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="border-0 bg-background/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="mb-4 rounded-full bg-gray-200 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />
            <div className="absolute left-0 bottom-0 -z-10 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl" />

            <div className="container px-4 md:px-6 relative">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-200 text-primary">
                  <span>How It Works</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                  Simplify Your Testing Workflow
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform streamlines your testing process in just three simple steps
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 relative">
                {/* Connecting line */}
                <div className="hidden md:block absolute top-24 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-primary/40 via-primary to-purple-600/40"></div>

                {[
                  {
                    step: 1,
                    icon: <FileUp className="h-10 w-10 text-primary" />,
                    title: "Import Test Cases",
                    description: "Easily import test cases from CSV files with our preformatted templates",
                  },
                  {
                    step: 2,
                    icon: <UserPlus className="h-10 w-10 text-primary" />,
                    title: "Add Interactivity",
                    description: "Add interactivity to test cases and assign roles to team members",
                  },
                  {
                    step: 3,
                    icon: <MessageCircle className="h-10 w-10 text-primary" />,
                    title: "Collaborate in Real-Time",
                    description: "Collaborate, comment, and track progress with your team in real-time",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-600 text-lg font-bold text-primary-foreground mb-8 z-10 shadow-lg">
                      {step.step}
                    </div>
                    <div className="rounded-xl border bg-background/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full h-full">
                      <div className="mb-4">{step.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />

            <div className="container px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-200 text-primary mb-4">
                    <span>Benefits</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl mb-4">
                    Empowering Teams to Deliver Quality Software
                  </h2>
                  <p className="text-muted-foreground md:text-xl mb-8">
                    Our platform helps teams collaborate effectively and deliver high-quality software
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <Clock className="h-6 w-6 text-primary" />,
                        title: "Save Time",
                        description: "Automate repetitive tasks like importing test cases and assigning roles",
                      },
                      {
                        icon: <Users className="h-6 w-6 text-primary" />,
                        title: "Improve Collaboration",
                        description: "Bridge the gap between testers and developers with real-time communication",
                      },
                      {
                        icon: <FolderKanban className="h-6 w-6 text-primary" />,
                        title: "Enhance Management",
                        description: "Organize projects, suites, and test cases effortlessly in one place",
                      },
                      {
                        icon: <Zap className="h-6 w-6 text-primary" />,
                        title: "Boost Productivity",
                        description: "Focus on testing, not managing tools, with our intuitive platform",
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="rounded-full bg-gray-200 p-2 mt-1">{benefit.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-md opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative rounded-xl overflow-hidden border shadow-xl">
                    <div className="aspect-square bg-muted/30 flex items-center justify-center p-8">
                      <div className="w-full h-full bg-background rounded-lg shadow-lg p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                          <div className="text-lg font-bold">Project Dashboard</div>
                          <div className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full">Active</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-muted/50 rounded-lg p-4 flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold text-primary">42</div>
                            <div className="text-xs text-muted-foreground">Test Cases</div>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-4 flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold text-primary">78%</div>
                            <div className="text-xs text-muted-foreground">Completion</div>
                          </div>
                        </div>

                        <div className="flex-1 space-y-3">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <div
                                className={cn(
                                  `h-2 w-2 rounded-full`,
                                  ["bg-green-500", "bg-yellow-500", "bg-blue-400", "bg-red-400"][i],
                                )}
                              ></div>
                              <div className="flex-1 h-4 bg-muted rounded"></div>
                              <div className="h-4 w-16 bg-muted rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />
            <div className="absolute right-0 bottom-0 -z-10 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl" />

            <div className="container px-4 md:px-6 relative">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-200 text-primary">
                  <span>Testimonials</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                  What Our Users Say
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from teams who have transformed their testing process with our platform
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    quote:
                      "TestCollab has completely transformed how our QA and development teams work together. The ability to import test cases and collaborate in real-time has cut our testing cycle by 40%.",
                    author: "Sarah Johnson",
                    role: "QA Lead, TechSolutions Inc.",
                  },
                  {
                    quote:
                      "The UAT features have been a game-changer for our client approvals. We can now manage the entire testing process in one place, with clear visibility for all stakeholders.",
                    author: "Michael Chen",
                    role: "Project Manager, WebDev Co.",
                  },
                  {
                    quote:
                      "As a developer, I appreciate how TestCollab bridges the communication gap with our QA team. The commenting feature helps us resolve issues quickly without endless email chains.",
                    author: "Alex Rodriguez",
                    role: "Senior Developer, InnovateSoft",
                  },
                ].map((testimonial, index) => (
                  <Card
                    key={index}
                    className="border-0 bg-background/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <CardContent className="p-6 relative">
                      <div className="absolute top-0 right-0 -mt-4 -mr-4 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804 .167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="mb-4 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-purple-600"></div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Demo/Interactive Preview */}
          <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />

            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-200 text-primary">
                  <span>Demo</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">See It in Action</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Watch how TestCollab can transform your testing workflow
                </p>
              </div>

              <div className="mx-auto max-w-4xl">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-md opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative rounded-xl overflow-hidden border shadow-xl">
                    <div className="aspect-video w-full bg-muted/30 flex items-center justify-center">
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                          <Play className="h-10 w-10 text-white" />
                        </div>
                      </div>
                      <div className="w-full h-full bg-gradient-to-br from-primary/5 to-purple-600/5"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <button
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                  >
                    Try Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Plans */}
          <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />
            <div className="absolute left-0 top-0 -z-10 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-3xl" />

            <div className="container px-4 md:px-6 relative">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-200 text-primary">
                  <span>Pricing</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                  Affordable Plans for Every Team
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that works best for your team's needs
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    name: "Free Trial",
                    price: "$0",
                    period: "14 days",
                    features: ["Up to 5 users", "Basic test case management", "CSV import", "Email support"],
                    cta: "Start Free Trial",
                    popular: false,
                  },
                  {
                    name: "Basic",
                    price: "$29",
                    period: "per month",
                    features: [
                      "Up to 10 users",
                      "Advanced test case management",
                      "CSV import/export",
                      "Basic collaboration tools",
                      "Email & chat support",
                    ],
                    cta: "Subscribe Now",
                    popular: false,
                  },
                  {
                    name: "Pro",
                    price: "$79",
                    period: "per month",
                    features: [
                      "Up to 25 users",
                      "Full test case management",
                      "Advanced collaboration tools",
                      "UAT management",
                      "API access",
                      "Priority support",
                    ],
                    cta: "Subscribe Now",
                    popular: true,
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    period: "contact sales",
                    features: [
                      "Unlimited users",
                      "Custom integrations",
                      "Advanced security features",
                      "Dedicated account manager",
                      "24/7 premium support",
                      "Custom training",
                    ],
                    cta: "Contact Sales",
                    popular: false,
                  },
                ].map((plan, index) => (
                  <Card
                    key={index}
                    className={cn(
                      `border-0 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col relative`,
                      plan.popular ? "bg-gradient-to-b from-background to-primary/5" : "bg-background/60",
                    )}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-primary to-purple-600 px-3 py-1 text-xs font-medium text-white shadow-md">
                        Popular
                      </div>
                    )}
                    <CardContent className="p-6 pt-8 flex-1">
                      <div className="mb-6 text-center">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <div className="mt-2 text-3xl font-bold">{plan.price}</div>
                        <p className="text-sm text-muted-foreground">{plan.period}</p>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <button
                        className={cn(
                          `w-full py-3 bg-black text-white`,
                          plan.popular
                            ? "bg-gradient-to-r py-3 from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                            : "",
                        )}
                      >
                        {plan.cta}
                      </button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faq" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-3xl" />

            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-200 text-primary">
                  <span>FAQ</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">Got Questions?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to commonly asked questions about our platform
                </p>
              </div>

              <div className="mx-auto max-w-3xl">
                <Card className="border-0 bg-background/60 backdrop-blur-sm shadow-md">
                  <CardContent className="p-6">
                    <Faq />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-purple-600/5 -z-10" />
            <div className="absolute inset-0 bg-grid-small-black/[0.03] -z-10" />

            <div className="container px-4 md:px-6 relative">
              <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-200 text-primary">
                    <span>Get Started</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Join thousands of testers improving their workflow today!
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Start your free trial and see how TestCollab can transform your testing process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      size="lg"
                      className="h-12 px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                    >
                      Get Started for Free
                    </button>
                    <button size="lg" variant="outline" className="h-12 px-8 border hover:bg-primary/5">
                      Request a Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-2 font-bold text-xl mb-4">
                  <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                    <Mountain className="h-5 w-5" />
                  </div>
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    TestCollab
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Collaborative manual testing platform for modern QA teams.
                </p>
                <div className="flex gap-4">
                  {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                    <Link
                      key={social}
                      to="#"
                      className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-gray-200 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  {["About Us", "Careers", "Blog", "Contact Us"].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  {["Documentation", "Help Center", "Community", "Webinars"].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance"].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} TestCollab. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-4 md:mt-0">Designed with ❤️ for testing teams worldwide</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

