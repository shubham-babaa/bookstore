"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Book {
  id: number
  title: string
  author: string
  price: number
  coverImage: string
  rating: number
}

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {

  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)

  }

  return (
    <Card className="overflow-hidden h-full">
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="aspect-[2/3] overflow-hidden"
        >
          <img
            src={book.coverImage || "/placeholder.svg"}
            alt={book.title}
            className="object-cover w-full h-full transition-transform"
          />
        </motion.div>
        <Badge className="absolute top-3 right-3">New</Badge>
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 left-3 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full ${
            isWishlisted ? "text-red-500" : "text-gray-500"
          }`}
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>
      </div>
      <CardContent className="p-5">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(book.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{book.rating.toFixed(1)}</span>
        </div>
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">by {book.author}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${book.price.toFixed(2)}</span>
          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

