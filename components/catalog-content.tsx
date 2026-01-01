"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/lib/store"
import { filterByCategory, searchParts } from "@/lib/features/parts-slice"
import { addToCart } from "@/lib/features/cart-slice"
import { Search, Filter, Grid3X3, List, Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const categories = ["All", "Brakes", "Engine", "Suspension", "Exhaust", "Wheels"]

export function CatalogContent() {
  const dispatch = useDispatch()
  const { items, filteredItems, selectedCategory } = useSelector((state: RootState) => state.parts)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const displayItems = filteredItems.length > 0 || selectedCategory || searchQuery ? filteredItems : items

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchParts(searchQuery))
    } else if (selectedCategory) {
      dispatch(filterByCategory(selectedCategory))
    } else {
      dispatch(filterByCategory(null))
    }
  }, [searchQuery, selectedCategory, dispatch])

  const handleCategoryClick = (category: string) => {
    setSearchQuery("")
    if (category === "All") {
      dispatch(filterByCategory(null))
    } else {
      dispatch(filterByCategory(category))
    }
  }

  const handleAddToCart = (item: (typeof items)[0]) => {
    dispatch(addToCart(item))
    setAddedItems((prev) => new Set(prev).add(item.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev)
        next.delete(item.id)
        return next
      })
    }, 2000)
  }

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-4">
            Parts <span className="font-semibold">Catalog</span>
          </h1>
          <p className="text-muted font-light leading-relaxed max-w-2xl mx-auto">
            Premium automotive components engineered for excellence
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-lg p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
              <Input
                type="text"
                placeholder="Search parts by name, category, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-12 bg-white/5 border-white/10 text-white placeholder:text-muted"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-5 w-5" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Filter className="h-5 w-5 text-muted mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  (category === "All" && !selectedCategory) || selectedCategory === category ? "default" : "outline"
                }
                size="sm"
                onClick={() => handleCategoryClick(category)}
                className="font-light tracking-wide"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted font-light mb-8"
        >
          Showing {displayItems.length} {displayItems.length === 1 ? "result" : "results"}
        </motion.p>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="group glass-card rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {!item.inStock && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-destructive/90 text-white text-xs font-medium rounded">
                          Out of Stock
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs text-accent font-medium tracking-wider uppercase">{item.category}</span>
                      <h3 className="text-xl font-light text-white mt-2 mb-2">{item.name}</h3>
                      <p className="text-muted font-light text-sm leading-relaxed mb-4">{item.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-light text-white">${item.price.toLocaleString()}</span>
                        <Button onClick={() => handleAddToCart(item)} disabled={!item.inStock} className="group/btn">
                          {addedItems.has(item.id) ? (
                            <>
                              <Check className="h-4 w-4 mr-2" />
                              Added
                            </>
                          ) : (
                            <>
                              <Plus className="h-4 w-4 mr-2" />
                              Add to Cart
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {displayItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="group glass-card rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-accent font-medium tracking-wider uppercase">
                              {item.category}
                            </span>
                            {!item.inStock && (
                              <span className="px-3 py-1 bg-destructive/90 text-white text-xs font-medium rounded">
                                Out of Stock
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-light text-white mb-2">{item.name}</h3>
                          <p className="text-muted font-light leading-relaxed mb-4">{item.description}</p>
                          <p className="text-sm text-muted font-light">
                            Compatible with: {item.compatibility.join(", ")}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                          <span className="text-3xl font-light text-white">${item.price.toLocaleString()}</span>
                          <Button onClick={() => handleAddToCart(item)} disabled={!item.inStock} size="lg">
                            {addedItems.has(item.id) ? (
                              <>
                                <Check className="h-4 w-4 mr-2" />
                                Added
                              </>
                            ) : (
                              <>
                                <Plus className="h-4 w-4 mr-2" />
                                Add to Cart
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
