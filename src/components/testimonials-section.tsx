"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Mike Rukudzo",
    role: "Auto Mechanic",
    image: "/testimonial-person-1.jpg",
    rating: 5,
    text: "Simbi Market has been my go-to supplier for a year. The quality is consistently excellent and delivery is always on time. Highly recommended!",
  },
  {
    name: "Sarah Sibanda",
    role: "Car Enthusiast",
    image: "/testimonial-person-2.jpg",
    rating: 4,
    text: "Amazing selection and expert support. The customer support team helped me find exactly what I needed for my project car. Outstanding service!",
  },
  {
    name: "David Moyo",
    role: "Performance Shop Owner",
    image: "/testimonial-person-3.jpg",
    rating: 5,
    text: "Professional grade parts at great prices. Simbi Market understands what performance enthusiasts need. They've never let me down!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
            What Our <span className="font-semibold">Customers Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-white/10" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-accent fill-accent" : "text-white/20"}`}
                  />
                ))}
              </div>

              <p className="text-white/80 font-light leading-relaxed mb-8">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
