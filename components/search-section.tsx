"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Scan } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchSection() {
  const [searchType, setSearchType] = useState<"vin" | "part">("vin")

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4">
            Command <span className="font-semibold">Center</span>
          </h2>
          <p className="text-muted font-light leading-relaxed">
            Search by VIN or part number for instant compatibility
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-lg p-8"
        >
          {/* Search Type Toggle */}
          <div className="flex gap-4 mb-6">
            <Button
              variant={searchType === "vin" ? "default" : "ghost"}
              onClick={() => setSearchType("vin")}
              className="flex-1 font-light tracking-wide"
            >
              <Scan className="mr-2 h-4 w-4" />
              VIN Search
            </Button>
            <Button
              variant={searchType === "part" ? "default" : "ghost"}
              onClick={() => setSearchType("part")}
              className="flex-1 font-light tracking-wide"
            >
              <Search className="mr-2 h-4 w-4" />
              Part Search
            </Button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder={searchType === "vin" ? "Enter your 17-digit VIN" : "Enter part name or number"}
              className="h-14 bg-white/5 border-white/10 text-white placeholder:text-muted pr-32"
            />
            <Button className="absolute right-2 top-2 bg-accent hover:bg-accent/90">Search</Button>
          </div>

          <p className="text-xs text-muted mt-4 font-light">Secure search • Encrypted data • Instant results</p>
        </motion.div>
      </div>
    </section>
  )
}
