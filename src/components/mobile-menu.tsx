"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Books", href: "#books" },
    { label: "Categories", href: "#categories" },
    { label: "Testimonials", href: "#testimonials" },
  ]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-xl p-6 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">BB Book Store</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="mb-8">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800"
                    onClick={onClose}
                  >
                    <span className="text-lg">{item.label}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-center">
              Sign In
            </Button>
            <Button className="w-full justify-center">Create Account</Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

