// src/lib/categories.js - AUTO INSURANCE CATEGORY HIERARCHY
export const CATEGORY_HIERARCHY = {
  "car-insurance-basics": {
    name: "Car Insurance Basics",
    description: "Understanding coverage types, requirements, and policy fundamentals",
    icon: "🚗",
    subcategories: {
      "liability-coverage": "Liability Coverage",
      "comprehensive-collision": "Comprehensive & Collision",
      "uninsured-motorist": "Uninsured/Underinsured Motorist",
      "personal-injury-protection": "Personal Injury Protection (PIP)",
      "medical-payments": "Medical Payments Coverage",
      "gap-insurance": "Gap Insurance",
      "rental-reimbursement": "Rental Reimbursement",
      "towing-coverage": "Towing & Labor Coverage"
    }
  },
  
  "cost-discounts": {
    name: "Cost & Discounts",
    description: "How insurance rates are calculated and ways to save money",
    icon: "💰",
    subcategories: {
      "rate-factors": "Insurance Rate Factors",
      "safe-driver-discounts": "Safe Driver Discounts",
      "multi-policy-discounts": "Multi-Policy Discounts",
      "good-student-discounts": "Good Student Discounts",
      "low-mileage-discounts": "Low Mileage Discounts",
      "anti-theft-discounts": "Anti-Theft Device Discounts",
      "payment-discounts": "Payment & Paperless Discounts",
      "occupation-discounts": "Occupation-Based Discounts"
    }
  },
  
  "claims-accidents": {
    name: "Claims & Accidents",
    description: "Step-by-step claims process, accident procedures, and settlement guidance",
    icon: "📋",
    subcategories: {
      "accident-procedure": "What to Do After an Accident",
      "filing-a-claim": "How to File a Claim",
      "claims-process": "Claims Process Explained",
      "total-loss-claims": "Total Loss Claims",
      "dispute-resolution": "Dispute Resolution",
      "claims-timeline": "Claims Timeline & Expectations",
      "rental-car-coverage": "Rental Car After Accident",
      "diminished-value-claims": "Diminished Value Claims"
    }
  },
  
  "drivers-coverage": {
    name: "Drivers & Coverage",
    description: "Insurance for different driver types and specialized coverage needs",
    icon: "👨‍👩‍👧",
    subcategories: {
      "teen-driver-insurance": "Teen & Young Driver Insurance",
      "senior-driver-insurance": "Senior Driver Insurance",
      "high-risk-drivers": "High-Risk & SR-22 Insurance",
      "rideshare-insurance": "Rideshare & Delivery Driver Insurance",
      "commercial-auto": "Commercial Auto Insurance",
      "classic-car-insurance": "Classic & Antique Car Insurance",
      "motorcycle-insurance": "Motorcycle Insurance",
      "rv-boat-insurance": "RV & Boat Insurance"
    }
  },
  
  "state-guides": {
    name: "State-Specific Guides",
    description: "Insurance requirements, laws, and average rates for each state",
    icon: "🗺️",
    subcategories: {
      "california": "California Insurance Guide",
      "texas": "Texas Insurance Guide",
      "florida": "Florida Insurance Guide",
      "new-york": "New York Insurance Guide",
      "pennsylvania": "Pennsylvania Insurance Guide",
      "illinois": "Illinois Insurance Guide",
      "ohio": "Ohio Insurance Guide",
      "georgia": "Georgia Insurance Guide",
      "north-carolina": "North Carolina Insurance Guide",
      "michigan": "Michigan Insurance Guide"
    }
  },
  
  "company-reviews": {
    name: "Company Reviews",
    description: "Unbiased reviews and comparisons of top auto insurance companies",
    icon: "🏢",
    subcategories: {
      "geico-review": "Geico Review & Analysis",
      "state-farm-review": "State Farm Review",
      "progressive-review": "Progressive Review",
      "allstate-review": "Allstate Review",
      "liberty-mutual-review": "Liberty Mutual Review",
      "usaa-review": "USAA Review",
      "farmers-review": "Farmers Insurance Review",
      "nationwide-review": "Nationwide Review",
      "travelers-review": "Travelers Review",
      "american-family-review": "American Family Review"
    }
  },
  
  "insurance-news": {
    name: "Insurance News",
    description: "Latest industry updates, rate changes, and regulatory developments",
    icon: "📰",
    subcategories: {
      "rate-increases": "Insurance Rate Changes",
      "new-coverage-options": "New Coverage Options",
      "regulatory-updates": "Regulatory & Legal Updates",
      "company-mergers": "Insurance Company Mergers",
      "technology-trends": "Insurance Technology Trends",
      "weather-impact": "Weather & Climate Impact",
      "fraud-prevention": "Fraud Prevention Updates"
    }
  },
  
  "saving-tips": {
    name: "Saving Tips",
    description: "Proven strategies to reduce your auto insurance premiums",
    icon: "💡",
    subcategories: {
      "annual-review": "Annual Policy Review Tips",
      "deductible-strategies": "Deductible Optimization",
      "credit-score-impact": "Credit Score Improvement",
      "defensive-driving-courses": "Defensive Driving Courses",
      "vehicle-safety-features": "Vehicle Safety Features",
      "storage-options": "Vehicle Storage Options",
      "pay-in-full": "Pay-In-Full Discounts",
      "group-discounts": "Group & Association Discounts"
    }
  },
  
  "comparison-tools": {
    name: "Comparison Tools",
    description: "Guides to comparing quotes and finding the best rates",
    icon: "⚖️",
    subcategories: {
      "quote-comparison": "How to Compare Quotes",
      "online-tools": "Best Online Comparison Tools",
      "agent-vs-direct": "Agent vs. Direct Purchase",
      "bundling-options": "Insurance Bundling Options",
      "coverage-comparison": "Coverage Comparison Guide",
      "customer-service-comparison": "Customer Service Comparison",
      "mobile-app-comparison": "Mobile App Features"
    }
  },
  
  "specialized-coverage": {
    name: "Specialized Coverage",
    description: "Niche insurance products and specialized protection options",
    icon: "🛡️",
    subcategories: {
      "gap-insurance": "Gap Insurance Explained",
      "roadside-assistance": "Roadside Assistance Plans",
      "new-car-replacement": "New Car Replacement",
      "accident-forgiveness": "Accident Forgiveness",
      "vanishing-deductible": "Vanishing Deductible",
      "rideshare-coverage": "Rideshare Endorsements",
      "custom-parts-coverage": "Custom Parts & Equipment",
      "pet-injury-coverage": "Pet Injury Coverage"
    }
  },

  "legal-regulatory": {
    name: "Legal & Regulatory",
    description: "Insurance laws, regulations, and legal requirements by state",
    icon: "⚖️",
    subcategories: {
      "state-requirements": "State Minimum Requirements",
      "no-fault-states": "No-Fault Insurance States",
      "financial-responsibility": "Financial Responsibility Laws",
      "sr22-requirements": "SR-22 Requirements",
      "insurance-fraud": "Insurance Fraud Laws",
      "consumer-protection": "Consumer Protection Laws",
      "appeals-process": "Appeals & Complaints Process"
    }
  },

  "emergency-preparedness": {
    name: "Emergency Preparedness",
    description: "Insurance considerations for emergencies, disasters, and unexpected events",
    icon: "🚨",
    subcategories: {
      "natural-disasters": "Natural Disaster Coverage",
      "winter-driving": "Winter & Ice Storm Preparation",
      "flood-coverage": "Flood Insurance for Vehicles",
      "hurricane-preparation": "Hurricane & Storm Preparation",
      "wildfire-protection": "Wildfire Risk & Protection",
      "emergency-kit": "Car Emergency Kit Guide",
      "roadside-emergencies": "Roadside Emergency Procedures"
    }
  },

  "future-trends": {
    name: "Future Trends",
    description: "Emerging technologies and future developments in auto insurance",
    icon: "🔮",
    subcategories: {
      "telematics-insurance": "Telematics & Usage-Based Insurance",
      "self-driving-cars": "Self-Driving Car Insurance",
      "electric-vehicles": "Electric Vehicle Insurance",
      "blockchain-insurance": "Blockchain in Insurance",
      "ai-pricing": "AI & Machine Learning Pricing",
      "shared-mobility": "Shared Mobility Insurance",
      "climate-change-impact": "Climate Change Impact"
    }
  }
};

// Helper: Get display name
export function getCategoryDisplay(categoryPath) {
  if (!categoryPath) return '';
  
  const [pillar, sub] = categoryPath.split('/');
  const pillarData = CATEGORY_HIERARCHY[pillar];
  
  if (!pillarData) return categoryPath;
  
  if (sub && pillarData.subcategories[sub]) {
    return pillarData.name + " > " + pillarData.subcategories[sub];
  }
  
  return pillarData.name;
}

// Helper: Get all categories for dropdowns
export function getAllCategories() {
  return Object.entries(CATEGORY_HIERARCHY).map(([key, data]) => ({
    slug: key,
    name: data.name,
    description: data.description,
    icon: data.icon,
    subcategories: Object.entries(data.subcategories || {}).map(([subKey, subName]) => ({
      slug: subKey,
      name: subName
    }))
  }));
}

// Helper: Get category data by slug
export function getCategoryBySlug(slug) {
  return CATEGORY_HIERARCHY[slug];
}

// Insurance-specific helper: Get state minimum requirements
export const STATE_MINIMUM_REQUIREMENTS = {
  "california": {
    liability: "15/30/5",
    description: "$15k injury per person, $30k per accident, $5k property damage",
    pip: false,
    noFault: false
  },
  "texas": {
    liability: "30/60/25",
    description: "$30k injury per person, $60k per accident, $25k property damage",
    pip: false,
    noFault: false
  },
  "florida": {
    liability: "10/20/10",
    description: "$10k injury per person, $20k per accident, $10k property damage",
    pip: true,
    noFault: true
  },
  "new-york": {
    liability: "25/50/10",
    description: "$25k injury per person, $50k per accident, $10k property damage",
    pip: true,
    noFault: true
  },
  "pennsylvania": {
    liability: "15/30/5",
    description: "$15k injury per person, $30k per accident, $5k property damage",
    pip: true,
    noFault: true
  }
};

// Helper: Get popular insurance companies
export const INSURANCE_COMPANIES = {
  "geico": {
    name: "Geico",
    rating: 4.5,
    pros: ["Low rates", "Easy online experience", "Good discounts"],
    cons: ["Limited local agents"],
    icon: "🦎"
  },
  "state-farm": {
    name: "State Farm",
    rating: 4.3,
    pros: ["Great local agents", "Bundle deals", "Good claims process"],
    cons: ["Can be more expensive"],
    icon: "🏢"
  },
  "progressive": {
    name: "Progressive",
    rating: 4.4,
    pros: ["Name your price tool", "Snapshot program", "Variety of coverage"],
    cons: ["Customer service varies"],
    icon: "📊"
  },
  "allstate": {
    name: "Allstate",
    rating: 4.2,
    pros: ["Accident forgiveness", "Safe driving bonus", "Local agents"],
    cons: ["Higher premiums"],
    icon: "👍"
  },
  "liberty-mutual": {
    name: "Liberty Mutual",
    rating: 4.1,
    pros: ["Customizable coverage", "Good discounts", "Accident forgiveness"],
    cons: ["Price increases over time"],
    icon: "🛡️"
  }
};