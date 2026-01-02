import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Part {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
  compatibility: string[]
  inStock: boolean
  brand?: string
  sku?: string
  weight?: string
  dimensions?: string
  material?: string
  warranty?: string
  specifications?: { label: string; value: string }[]
  features?: string[]
  installationDifficulty?: "Easy" | "Medium" | "Hard"
  installationTime?: string
  images?: string[]
  videos?: { title: string; url: string; thumbnail: string }[]
  relatedParts?: string[]
  reviews?: { author: string; rating: number; comment: string; date: string }[]
}

interface PartsState {
  items: Part[]
  filteredItems: Part[]
  selectedCategory: string | null
}

const initialState: PartsState = {
  items: [
    {
      id: "1",
      name: "Performance Brake System",
      category: "Brakes",
      price: 1299.99,
      image: "/high-end-car-brake-disc-rotor-close-up-macro.jpg",
      description:
        "High-performance ceramic brake system for superior stopping power. Engineered for both track and street use, this brake system delivers exceptional performance in all conditions.",
      compatibility: ["Model S", "Model 3", "Range Rover Sport"],
      inStock: true,
      brand: "Brembo",
      sku: "BRK-PRM-001",
      weight: "12.5 kg",
      dimensions: "380mm x 36mm",
      material: "Carbon Ceramic",
      warranty: "3 Years / 60,000 km",
      specifications: [
        { label: "Disc Diameter", value: "380mm" },
        { label: "Disc Thickness", value: "36mm" },
        { label: "Caliper Pistons", value: "6-Piston" },
        { label: "Pad Compound", value: "Carbon Ceramic" },
        { label: "Max Temperature", value: "800°C" },
        { label: "Weight Reduction", value: "40% vs OEM" },
      ],
      features: [
        "Superior heat dissipation technology",
        "Reduced brake fade during aggressive driving",
        "Direct bolt-on fitment - no modifications required",
        "Includes stainless steel brake lines",
        "Cross-drilled and slotted rotors",
        "DOT4 compatible brake fluid recommended",
      ],
      installationDifficulty: "Medium",
      installationTime: "2-3 hours",
      images: [
        "/high-end-car-brake-disc-rotor-close-up-macro.jpg",
        "/brake-caliper-red-close-up.jpg",
        "/brake-pads-ceramic-detail.jpg",
        "/brake-system-installed-wheel.jpg",
      ],
      videos: [
        { title: "Installation Guide", url: "#", thumbnail: "/video-thumb-brake-install.jpg" },
        { title: "Brake Bedding Process", url: "#", thumbnail: "/video-thumb-brake-bedding.jpg" },
      ],
      relatedParts: ["2", "3"],
      reviews: [
        {
          author: "Mike R.",
          rating: 5,
          comment: "Incredible stopping power! Night and day difference from stock.",
          date: "Dec 10, 2025",
        },
        {
          author: "Sarah K.",
          rating: 5,
          comment: "Easy install with the included instructions. Performance is outstanding.",
          date: "Nov 28, 2025",
        },
        {
          author: "David M.",
          rating: 4,
          comment: "Great brakes, just wish they came in more colors.",
          date: "Nov 15, 2025",
        },
      ],
    },
    {
      id: "2",
      name: "Carbon Fiber Intake Manifold",
      category: "Engine",
      price: 2499.99,
      image: "/carbon-fiber-engine-component-macro-photography.jpg",
      description:
        "Lightweight carbon fiber construction for enhanced airflow and improved throttle response. Precision engineered for maximum performance gains.",
      compatibility: ["Range Rover", "Discovery", "Defender"],
      inStock: true,
      brand: "APR",
      sku: "ENG-CFI-002",
      weight: "3.2 kg",
      dimensions: "450mm x 280mm x 120mm",
      material: "Carbon Fiber Composite",
      warranty: "2 Years / 40,000 km",
      specifications: [
        { label: "Material", value: "Pre-preg Carbon Fiber" },
        { label: "Weight Savings", value: "45% vs Stock" },
        { label: "Flow Increase", value: "+28%" },
        { label: "HP Gain", value: "+15-25 HP" },
        { label: "Torque Gain", value: "+18-22 lb-ft" },
        { label: "Finish", value: "Gloss Clear Coat" },
      ],
      features: [
        "Hand-laid carbon fiber construction",
        "Larger plenum volume for increased air capacity",
        "Optimized runner lengths for peak torque",
        "Integrated sensor ports",
        "Heat-resistant clear coat finish",
        "Direct OEM replacement - plug and play",
      ],
      installationDifficulty: "Hard",
      installationTime: "4-6 hours",
      images: [
        "/carbon-fiber-engine-component-macro-photography.jpg",
        "/intake-manifold-top-view.jpg",
        "/intake-manifold-installed.jpg",
      ],
      videos: [{ title: "Full Installation Tutorial", url: "#", thumbnail: "/video-thumb-intake-install.jpg" }],
      relatedParts: ["5"],
      reviews: [
        {
          author: "James T.",
          rating: 5,
          comment: "The throttle response improvement alone is worth it!",
          date: "Dec 5, 2025",
        },
        {
          author: "Lisa M.",
          rating: 5,
          comment: "Beautiful craftsmanship and noticeable power gains.",
          date: "Nov 20, 2025",
        },
      ],
    },
    {
      id: "3",
      name: "Adaptive Suspension Kit",
      category: "Suspension",
      price: 3799.99,
      image: "/luxury-car-suspension-system-close-up.jpg",
      description:
        "Premium adaptive suspension system with real-time adjustment. Transform your ride with adjustable damping for comfort or performance.",
      compatibility: ["Model X", "Range Rover Velar"],
      inStock: true,
      brand: "KW Suspensions",
      sku: "SUS-ADP-003",
      weight: "28 kg (complete kit)",
      dimensions: "Variable",
      material: "Aircraft-grade Aluminum",
      warranty: "5 Years / 100,000 km",
      specifications: [
        { label: "Adjustment Range", value: "16 Levels" },
        { label: "Lowering Range", value: "25-50mm" },
        { label: "Spring Rate (Front)", value: "Variable 6-10 kg/mm" },
        { label: "Spring Rate (Rear)", value: "Variable 8-12 kg/mm" },
        { label: "Damper Type", value: "Twin-Tube" },
        { label: "Controller", value: "Bluetooth App" },
      ],
      features: [
        "Electronic damping control via smartphone app",
        "16 compression and 16 rebound settings",
        "Height-adjustable spring perches",
        "Corrosion-resistant coating",
        "TÜV certified",
        "Complete with all mounting hardware",
      ],
      installationDifficulty: "Hard",
      installationTime: "6-8 hours",
      images: [
        "/luxury-car-suspension-system-close-up.jpg",
        "/suspension-coilover-detail.jpg",
        "/suspension-app-control.jpg",
      ],
      videos: [
        { title: "Complete Installation Guide", url: "#", thumbnail: "/video-thumb-suspension-install.jpg" },
        { title: "App Setup Tutorial", url: "#", thumbnail: "/video-thumb-app-setup.jpg" },
      ],
      relatedParts: ["1", "6"],
      reviews: [
        {
          author: "Chris P.",
          rating: 5,
          comment: "The app control is a game changer. Soft for daily, firm for weekends.",
          date: "Dec 12, 2025",
        },
      ],
    },
    {
      id: "4",
      name: "Titanium Exhaust System",
      category: "Exhaust",
      price: 4299.99,
      image: "/titanium-car-exhaust-system-macro.jpg",
      description:
        "Lightweight titanium construction with optimized flow dynamics. Hand-crafted for the ultimate in sound and performance.",
      compatibility: ["Model S Plaid", "Range Rover Sport SVR"],
      inStock: false,
      brand: "Akrapovič",
      sku: "EXH-TIT-004",
      weight: "8.5 kg",
      dimensions: "Cat-back System",
      material: "Grade 1 Titanium",
      warranty: "2 Years / 40,000 km",
      specifications: [
        { label: "Material", value: "Grade 1 Titanium" },
        { label: "Weight Savings", value: "65% vs Stock" },
        { label: "Sound Level", value: "Sports (Valve Controlled)" },
        { label: "Tips", value: "Carbon Fiber 100mm" },
        { label: "HP Gain", value: "+12 HP" },
        { label: "Construction", value: "TIG Welded" },
      ],
      features: [
        "Valve-controlled sound system",
        "Aerospace-grade titanium",
        "Carbon fiber exhaust tips",
        "Hand-polished finish",
        "Dyno-tested performance gains",
        "ECU tune compatible",
      ],
      installationDifficulty: "Medium",
      installationTime: "3-4 hours",
      images: [
        "/titanium-car-exhaust-system-macro.jpg",
        "/exhaust-tips-carbon-detail.jpg",
        "/exhaust-system-undercar.jpg",
      ],
      videos: [
        { title: "Sound Comparison", url: "#", thumbnail: "/video-thumb-exhaust-sound.jpg" },
        { title: "Installation Guide", url: "#", thumbnail: "/video-thumb-exhaust-install.jpg" },
      ],
      relatedParts: ["2", "5"],
      reviews: [],
    },
    {
      id: "5",
      name: "Performance Turbocharger",
      category: "Engine",
      price: 5499.99,
      image: "/turbocharger-turbine-close-up-metallic.jpg",
      description:
        "High-efficiency turbocharger for maximum power output. Precision-balanced and tested for reliability.",
      compatibility: ["Range Rover", "Discovery Sport"],
      inStock: true,
      brand: "Garrett",
      sku: "ENG-TRB-005",
      weight: "6.8 kg",
      dimensions: "280mm x 240mm x 220mm",
      material: "Inconel / Aluminum",
      warranty: "2 Years / 40,000 km",
      specifications: [
        { label: "Compressor Wheel", value: "62mm Billet" },
        { label: "Turbine Wheel", value: "56mm Inconel" },
        { label: "Bearing Type", value: "Dual Ball Bearing" },
        { label: "Max Boost", value: "28 PSI" },
        { label: "HP Potential", value: "450+ HP" },
        { label: "A/R Ratio", value: "0.82" },
      ],
      features: [
        "Dual ball bearing center housing",
        "Billet aluminum compressor wheel",
        "Inconel turbine wheel for durability",
        "Speed sensor port included",
        "Water and oil cooled",
        "Anti-surge compressor housing",
      ],
      installationDifficulty: "Hard",
      installationTime: "8-12 hours",
      images: [
        "/turbocharger-turbine-close-up-metallic.jpg",
        "/turbo-compressor-wheel-detail.jpg",
        "/turbo-installed-engine.jpg",
      ],
      videos: [{ title: "Professional Installation Guide", url: "#", thumbnail: "/video-thumb-turbo-install.jpg" }],
      relatedParts: ["2", "4"],
      reviews: [
        {
          author: "Tom H.",
          rating: 5,
          comment: "Incredible power gains. Professional install recommended.",
          date: "Dec 1, 2025",
        },
      ],
    },
    {
      id: "6",
      name: "Lightweight Wheel Set",
      category: "Wheels",
      price: 3299.99,
      image: "/luxury-car-wheel-rim-close-up-silver.jpg",
      description:
        "Forged aluminum wheels with aerodynamic design. Reduce unsprung weight for improved handling and acceleration.",
      compatibility: ["Model 3", "Model Y", "Evoque"],
      inStock: true,
      brand: "BBS",
      sku: "WHL-FRG-006",
      weight: "8.2 kg per wheel",
      dimensions: "20x9 ET35",
      material: "Forged 6061-T6 Aluminum",
      warranty: "Lifetime Structural",
      specifications: [
        { label: "Size", value: "20x9 inches" },
        { label: "Offset", value: "ET35" },
        { label: "Bolt Pattern", value: "5x120" },
        { label: "Center Bore", value: "72.6mm" },
        { label: "Weight", value: "8.2 kg/wheel" },
        { label: "Finish", value: "Diamond Cut" },
      ],
      features: [
        "Flow-formed construction",
        "JWL/VIA certified",
        "Aerodynamic spoke design",
        "Hub-centric fitment",
        "Includes center caps",
        "TPMS compatible",
      ],
      installationDifficulty: "Easy",
      installationTime: "1 hour",
      images: ["/luxury-car-wheel-rim-close-up-silver.jpg", "/wheel-spoke-detail.jpg", "/wheels-on-car-side-view.jpg"],
      videos: [{ title: "Wheel Fitting Guide", url: "#", thumbnail: "/video-thumb-wheel-install.jpg" }],
      relatedParts: ["3"],
      reviews: [
        {
          author: "Alex W.",
          rating: 5,
          comment: "Beautiful wheels, perfect fitment. Noticeable handling improvement.",
          date: "Dec 8, 2025",
        },
        {
          author: "Emma S.",
          rating: 5,
          comment: "Light weight and stunning looks. Highly recommend!",
          date: "Nov 25, 2025",
        },
      ],
    },
    {
      id: "7",
      name: "Performance Shock Absorbers",
      category: "Suspension",
      price: 1899.99,
      image: "/new/shock.jpeg",
      description:
        "High-performance gas-charged shock absorbers for superior ride quality and handling. Engineered for both comfort and performance.",
      compatibility: ["Range Rover", "Land Rover", "Discovery"],
      inStock: true,
      brand: "Bilstein",
      sku: "SUS-SHK-007",
      weight: "3.5 kg per shock",
      dimensions: "Variable fitment",
      material: "Steel with zinc coating",
      warranty: "Limited Lifetime",
      specifications: [
        { label: "Type", value: "Monotube Gas Pressure" },
        { label: "Piston Diameter", value: "46mm" },
        { label: "Gas Pressure", value: "360 PSI" },
        { label: "Mounting", value: "OE Compatible" },
        { label: "Set", value: "4 Shocks (Front & Rear)" },
        { label: "Finish", value: "Yellow Zinc Dichromate" },
      ],
      features: [
        "Monotube gas pressure technology",
        "Velocity-sensitive damping",
        "Fade-free performance",
        "Self-adjusting digressive valving",
        "Zinc-plated piston rod",
        "Direct OEM replacement",
      ],
      installationDifficulty: "Medium",
      installationTime: "2-4 hours",
      relatedParts: ["3"],
      reviews: [
        {
          author: "Robert L.",
          rating: 5,
          comment: "Transformed my vehicle's handling. Much better than OEM.",
          date: "Dec 15, 2025",
        },
      ],
    },
    {
      id: "8",
      name: "Premium Alloy Wheels",
      category: "Wheels",
      price: 2799.99,
      image: "/new/merge_wheels.jpeg",
      description:
        "Stunning multi-spoke alloy wheels with mirror-finish. Perfect blend of style and performance for luxury vehicles.",
      compatibility: ["Mercedes-Benz", "BMW", "Audi"],
      inStock: true,
      brand: "Vossen",
      sku: "WHL-ALY-008",
      weight: "10.5 kg per wheel",
      dimensions: "19x8.5 ET45",
      material: "Cast Aluminum Alloy",
      warranty: "2 Years Structural",
      specifications: [
        { label: "Size", value: "19x8.5 inches" },
        { label: "Offset", value: "ET45" },
        { label: "Bolt Pattern", value: "5x112" },
        { label: "Center Bore", value: "66.6mm" },
        { label: "Weight", value: "10.5 kg/wheel" },
        { label: "Finish", value: "Chrome Polished" },
      ],
      features: [
        "Multi-spoke contemporary design",
        "Mirror chrome finish",
        "Load rated for luxury SUVs",
        "Hub-centric rings included",
        "TPMS sensor compatible",
        "Anti-corrosion coating",
      ],
      installationDifficulty: "Easy",
      installationTime: "1 hour",
      relatedParts: ["6", "9"],
      reviews: [
        {
          author: "Michael B.",
          rating: 5,
          comment: "Absolutely stunning! Get compliments everywhere I go.",
          date: "Dec 20, 2025",
        },
      ],
    },
    {
      id: "9",
      name: "High-Performance Tires",
      category: "Wheels",
      price: 1599.99,
      image: "/new/tires.jpeg",
      description:
        "Ultra-high performance all-season tires with exceptional grip. Advanced tread compound for maximum traction in all conditions.",
      compatibility: ["Universal - Multiple Sizes Available"],
      inStock: true,
      brand: "Michelin",
      sku: "TYR-UHP-009",
      weight: "11 kg per tire",
      dimensions: "245/45R19",
      material: "Silica-enhanced rubber compound",
      warranty: "5 Years / 80,000 km",
      specifications: [
        { label: "Size", value: "245/45R19" },
        { label: "Speed Rating", value: "Y (300 km/h)" },
        { label: "Load Index", value: "102" },
        { label: "Tread Depth", value: "8.5mm" },
        { label: "Type", value: "All-Season Performance" },
        { label: "Run-Flat", value: "No" },
      ],
      features: [
        "3D self-locking sipes",
        "Exceptional wet and dry grip",
        "Reduced rolling resistance",
        "Optimized contact patch",
        "Long tread life warranty",
        "Silent tread technology",
      ],
      installationDifficulty: "Easy",
      installationTime: "1 hour (professional install)",
      relatedParts: ["6", "8", "11"],
      reviews: [
        {
          author: "Jennifer K.",
          rating: 5,
          comment: "Best tires I've owned. Great in rain and very quiet.",
          date: "Dec 18, 2025",
        },
      ],
    },
    {
      id: "10",
      name: "Competition Wheel Set",
      category: "Wheels",
      price: 4199.99,
      image: "/new/wheel_merge_2.jpeg",
      description:
        "Track-ready forged wheels with aggressive styling. Designed for maximum performance and minimum weight.",
      compatibility: ["Porsche", "BMW M Series", "Mercedes AMG"],
      inStock: true,
      brand: "HRE",
      sku: "WHL-CMP-010",
      weight: "7.8 kg per wheel",
      dimensions: "20x10 ET25",
      material: "Forged Monoblock Aluminum",
      warranty: "Lifetime Structural",
      specifications: [
        { label: "Size", value: "20x10 inches" },
        { label: "Offset", value: "ET25" },
        { label: "Bolt Pattern", value: "5x130" },
        { label: "Center Bore", value: "71.6mm" },
        { label: "Weight", value: "7.8 kg/wheel" },
        { label: "Finish", value: "Satin Black" },
      ],
      features: [
        "True forged monoblock construction",
        "Motorsport-inspired design",
        "Aerospace-grade aluminum",
        "Brake caliper clearance optimized",
        "Custom center cap logo",
        "Track-tested durability",
      ],
      installationDifficulty: "Easy",
      installationTime: "1-2 hours",
      relatedParts: ["6", "8"],
      reviews: [
        {
          author: "David R.",
          rating: 5,
          comment: "Worth every penny. Reduced lap times and look incredible.",
          date: "Dec 22, 2025",
        },
      ],
    },
    {
      id: "11",
      name: "Professional Wheel Alignment Kit",
      category: "Wheels",
      price: 899.99,
      image: "/new/wheel_alignin.jpeg",
      description:
        "Precision alignment components for perfect wheel geometry. Includes adjustable camber plates and toe arms.",
      compatibility: ["BMW", "Mercedes-Benz", "Audi"],
      inStock: true,
      brand: "SPL Parts",
      sku: "WHL-ALN-011",
      weight: "5.2 kg (complete kit)",
      dimensions: "Variable",
      material: "Chromoly Steel",
      warranty: "3 Years",
      specifications: [
        { label: "Camber Range", value: "±3 degrees" },
        { label: "Toe Adjustment", value: "±2 degrees" },
        { label: "Material", value: "Chromoly Steel" },
        { label: "Bushings", value: "Spherical Bearings" },
        { label: "Finish", value: "Black Anodized" },
        { label: "Kit Includes", value: "Front + Rear" },
      ],
      features: [
        "Spherical bearing end links",
        "Adjustable camber plates",
        "Precision toe adjustment",
        "Track-ready performance",
        "Street-legal compliance",
        "Complete hardware included",
      ],
      installationDifficulty: "Medium",
      installationTime: "3-4 hours",
      relatedParts: ["3", "6"],
      reviews: [
        {
          author: "Chris M.",
          rating: 5,
          comment: "Perfect for lowered cars. Easy to dial in exactly what you want.",
          date: "Dec 14, 2025",
        },
      ],
    },
    {
      id: "12",
      name: "Racing Performance Tires",
      category: "Wheels",
      price: 1899.99,
      image: "/new/tyre_merge.jpeg",
      description:
        "Semi-slick track tires for ultimate grip. DOT-approved for street use with competition-level performance.",
      compatibility: ["Universal - Multiple Sizes Available"],
      inStock: true,
      brand: "Pirelli",
      sku: "TYR-RCE-012",
      weight: "10 kg per tire",
      dimensions: "265/35R20",
      material: "Competition compound",
      warranty: "1 Year",
      specifications: [
        { label: "Size", value: "265/35R20" },
        { label: "Speed Rating", value: "Y (300 km/h)" },
        { label: "Load Index", value: "99" },
        { label: "Tread Depth", value: "6mm" },
        { label: "Type", value: "Semi-Slick" },
        { label: "DOT Approved", value: "Yes" },
      ],
      features: [
        "Track-focused tread compound",
        "DOT street legal",
        "Maximum dry grip",
        "Heat-resistant construction",
        "Lightweight carcass",
        "Professional racing pedigree",
      ],
      installationDifficulty: "Easy",
      installationTime: "1 hour (professional install)",
      relatedParts: ["9", "10"],
      reviews: [
        {
          author: "Marcus T.",
          rating: 5,
          comment: "Insane grip on track days! Not great in rain though.",
          date: "Dec 10, 2025",
        },
      ],
    },
    {
      id: "13",
      name: "Complete Engine Bay Upgrade Kit",
      category: "Engine",
      price: 3999.99,
      image: "/new/engine_bay.jpeg",
      description:
        "Comprehensive engine bay enhancement package including dress-up components and performance upgrades.",
      compatibility: ["Range Rover", "BMW", "Mercedes-Benz"],
      inStock: true,
      brand: "Custom",
      sku: "ENG-BAY-013",
      weight: "15 kg",
      dimensions: "Complete Kit",
      material: "Aluminum/Carbon Fiber",
      warranty: "1 Year",
      specifications: [
        { label: "Kit Includes", value: "Multiple Components" },
        { label: "Finish Options", value: "Polished/Anodized" },
        { label: "Material", value: "Billet Aluminum" },
        { label: "Covers Included", value: "Engine/Fuse/Strut" },
        { label: "Hardware", value: "Stainless Steel" },
        { label: "Style", value: "Show Quality" },
      ],
      features: [
        "Custom engine covers",
        "Polished aluminum components",
        "Carbon fiber accents",
        "Stainless hardware kit",
        "Dress-up wiring looms",
        "Show-quality finish",
      ],
      installationDifficulty: "Medium",
      installationTime: "4-6 hours",
      relatedParts: ["2", "5"],
      reviews: [
        {
          author: "Paul S.",
          rating: 5,
          comment: "Engine bay looks like a work of art now!",
          date: "Dec 25, 2025",
        },
      ],
    },
    {
      id: "14",
      name: "Professional Engine Rebuild Kit",
      category: "Engine",
      price: 4599.99,
      image: "/new/engineworks.jpeg",
      description:
        "Complete engine rebuild kit with upgraded internals. Everything needed for a professional engine overhaul.",
      compatibility: ["Range Rover", "Land Rover", "Discovery"],
      inStock: true,
      brand: "Mahle",
      sku: "ENG-RBD-014",
      weight: "35 kg",
      dimensions: "Complete Kit",
      material: "Forged Steel/Aluminum",
      warranty: "2 Years / 40,000 km",
      specifications: [
        { label: "Pistons", value: "Forged Aluminum" },
        { label: "Rings", value: "Premium Moly" },
        { label: "Bearings", value: "Tri-Metal" },
        { label: "Gasket Set", value: "Complete MLS" },
        { label: "Timing Kit", value: "OEM Quality" },
        { label: "Oil Pump", value: "High-Volume" },
      ],
      features: [
        "Forged aluminum pistons",
        "Performance piston rings",
        "Complete gasket set",
        "Upgraded timing components",
        "High-volume oil pump",
        "Professional-grade bearings",
      ],
      installationDifficulty: "Hard",
      installationTime: "20-30 hours",
      relatedParts: ["2", "5"],
      reviews: [
        {
          author: "Tony M.",
          rating: 5,
          comment: "Quality components. Engine runs better than new!",
          date: "Dec 5, 2025",
        },
      ],
    },
    {
      id: "15",
      name: "Performance Transmission Upgrade",
      category: "Engine",
      price: 5999.99,
      image: "/new/transmission.jpeg",
      description:
        "Heavy-duty transmission upgrade kit with reinforced components. Handles increased power with improved shift quality.",
      compatibility: ["Range Rover Sport", "Discovery", "Defender"],
      inStock: true,
      brand: "ZF",
      sku: "TRN-UPG-015",
      weight: "45 kg",
      dimensions: "Complete Assembly",
      material: "Hardened Steel",
      warranty: "3 Years / 60,000 km",
      specifications: [
        { label: "Clutch Packs", value: "Carbon Fiber" },
        { label: "Torque Capacity", value: "1000 Nm" },
        { label: "Valve Body", value: "Performance Tuned" },
        { label: "Torque Converter", value: "High-Stall" },
        { label: "Cooler", value: "Upgraded" },
        { label: "Fluid", value: "Synthetic ATF" },
      ],
      features: [
        "Carbon fiber clutch packs",
        "Performance valve body",
        "High-stall torque converter",
        "Upgraded transmission cooler",
        "Reinforced components",
        "Faster shift response",
      ],
      installationDifficulty: "Hard",
      installationTime: "12-16 hours",
      relatedParts: ["5", "13"],
      reviews: [
        {
          author: "Steve K.",
          rating: 5,
          comment: "Shifts are lightning fast now. Handles the extra power perfectly.",
          date: "Dec 28, 2025",
        },
      ],
    },
  ],
  filteredItems: [],
  selectedCategory: null,
}

const partsSlice = createSlice({
  name: "parts",
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload
      if (action.payload) {
        state.filteredItems = state.items.filter((item) => item.category === action.payload)
      } else {
        state.filteredItems = state.items
      }
    },
    searchParts: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase()
      state.filteredItems = state.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query),
      )
    },
  },
})

export const { filterByCategory, searchParts } = partsSlice.actions
export default partsSlice.reducer
