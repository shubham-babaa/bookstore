"use client"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{testimonial.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
          </div>
        </div>

        <div className="mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`inline-block h-4 w-4 ${
                i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="relative">
          <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-200 dark:text-gray-700" />
          <p className="text-gray-600 dark:text-gray-300 relative z-10 pl-4">{testimonial.content}</p>
        </div>
      </CardContent>
    </Card>
  )
}

