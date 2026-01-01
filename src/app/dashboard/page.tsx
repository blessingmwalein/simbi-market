"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import {
  User,
  Package,
  CreditCard,
  Settings,
  Bell,
  ChevronRight,
  Clock,
  CheckCircle2,
  Truck,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const tabs = [
  { id: "overview", label: "Overview", icon: User },
  { id: "orders", label: "Orders", icon: Package },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "settings", label: "Settings", icon: Settings },
]

const orders = [
  {
    id: "ORD-2025-0142",
    date: "Dec 28, 2025",
    status: "delivered",
    items: [{ name: "Performance Brake System", image: "/high-end-car-brake-disc-rotor-close-up-macro.jpg" }],
    total: 1299.99,
  },
  {
    id: "ORD-2025-0138",
    date: "Dec 22, 2025",
    status: "shipped",
    items: [{ name: "Carbon Fiber Intake Manifold", image: "/carbon-fiber-engine-component-macro-photography.jpg" }],
    total: 2499.99,
  },
  {
    id: "ORD-2025-0131",
    date: "Dec 15, 2025",
    status: "processing",
    items: [{ name: "Adaptive Suspension Kit", image: "/luxury-car-suspension-system-close-up.jpg" }],
    total: 3799.99,
  },
]

const statusConfig = {
  delivered: { icon: CheckCircle2, label: "Delivered", color: "text-green-400" },
  shipped: { icon: Truck, label: "Shipped", color: "text-accent" },
  processing: { icon: Clock, label: "Processing", color: "text-yellow-400" },
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                  <span className="text-2xl font-light text-white">JD</span>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white">Welcome back, John</h1>
                  <p className="text-muted font-light">Pro Mechanic Account • Member since 2023</p>
                </div>
              </div>
              <Button variant="outline" className="w-fit bg-transparent">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <span className="ml-2 px-2 py-0.5 bg-accent text-white text-xs rounded-full">3</span>
              </Button>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex gap-2 mb-8 overflow-x-auto pb-2"
          >
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className="font-light tracking-wide whitespace-nowrap"
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </motion.div>

          {/* Content */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid md:grid-cols-4 gap-6"
              >
                {[
                  { label: "Total Orders", value: "24", change: "+3 this month" },
                  { label: "Total Spent", value: "$18,450", change: "+12% from last month" },
                  { label: "Parts Installed", value: "42", change: "6 pending" },
                  { label: "Rewards Points", value: "2,450", change: "Redeem $50" },
                ].map((stat, index) => (
                  <div key={stat.label} className="glass-card rounded-lg p-6">
                    <p className="text-muted font-light text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-light text-white mb-1">{stat.value}</p>
                    <p className="text-xs text-accent font-light">{stat.change}</p>
                  </div>
                ))}
              </motion.div>

              {/* Recent Orders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-light text-white">Recent Orders</h2>
                  <Button variant="ghost" className="font-light">
                    View All
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {orders.map((order, index) => {
                    const status = statusConfig[order.status as keyof typeof statusConfig]
                    return (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="glass-card rounded-lg p-6"
                      >
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={order.items[0].image || "/placeholder.svg"}
                              alt={order.items[0].name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div>
                                <h3 className="text-lg font-light text-white">{order.items[0].name}</h3>
                                <p className="text-muted font-light text-sm">
                                  {order.id} • {order.date}
                                </p>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className={`flex items-center gap-2 ${status.color}`}>
                                  <status.icon className="h-4 w-4" />
                                  <span className="text-sm font-light">{status.label}</span>
                                </div>
                                <span className="text-xl font-light text-white">${order.total.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === "orders" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <div className="space-y-4">
                {orders.map((order, index) => {
                  const status = statusConfig[order.status as keyof typeof statusConfig]
                  return (
                    <div key={order.id} className="glass-card rounded-lg p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={order.items[0].image || "/placeholder.svg"}
                            alt={order.items[0].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-light text-white mb-1">{order.items[0].name}</h3>
                              <p className="text-muted font-light text-sm mb-2">
                                Order {order.id} • Placed on {order.date}
                              </p>
                              <div className={`flex items-center gap-2 ${status.color}`}>
                                <status.icon className="h-4 w-4" />
                                <span className="font-light">{status.label}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-light text-white">${order.total.toLocaleString()}</span>
                              <div className="flex gap-2 mt-4">
                                <Button variant="outline" size="sm">
                                  Track Order
                                </Button>
                                <Button variant="ghost" size="sm">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "payments" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Payment Methods */}
                <div className="glass-card rounded-lg p-6">
                  <h3 className="text-xl font-light text-white mb-6">Payment Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">VISA</span>
                        </div>
                        <div>
                          <p className="text-white font-light">•••• •••• •••• 4242</p>
                          <p className="text-muted text-sm font-light">Expires 12/26</p>
                        </div>
                      </div>
                      <span className="text-xs text-accent">Default</span>
                    </div>
                    <Button variant="outline" className="w-full font-light bg-transparent">
                      Add Payment Method
                    </Button>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="glass-card rounded-lg p-6">
                  <h3 className="text-xl font-light text-white mb-6">Billing Address</h3>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                    <MapPin className="h-5 w-5 text-muted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-light">John Doe</p>
                      <p className="text-muted font-light text-sm">123 Premium Lane</p>
                      <p className="text-muted font-light text-sm">Beverly Hills, CA 90210</p>
                      <p className="text-muted font-light text-sm">United States</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full font-light mt-4 bg-transparent">
                    Edit Address
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <div className="max-w-2xl">
                <div className="glass-card rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-light text-white mb-6">Account Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted font-light mb-2 block">Full Name</label>
                      <Input defaultValue="John Doe" className="bg-white/5 border-white/10 text-white" />
                    </div>
                    <div>
                      <label className="text-sm text-muted font-light mb-2 block">Email</label>
                      <Input defaultValue="john.doe@example.com" className="bg-white/5 border-white/10 text-white" />
                    </div>
                    <div>
                      <label className="text-sm text-muted font-light mb-2 block">Phone</label>
                      <Input defaultValue="+1 (555) 123-4567" className="bg-white/5 border-white/10 text-white" />
                    </div>
                    <Button className="mt-4">Save Changes</Button>
                  </div>
                </div>

                <div className="glass-card rounded-lg p-6">
                  <h3 className="text-xl font-light text-white mb-6">Notification Preferences</h3>
                  <div className="space-y-4">
                    {["Order updates", "Promotions & offers", "New parts alerts", "Newsletter"].map((item) => (
                      <label key={item} className="flex items-center justify-between cursor-pointer">
                        <span className="text-white font-light">{item}</span>
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
