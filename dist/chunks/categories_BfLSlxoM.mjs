// src/lib/categories.js - AUTO INSURAGE CATEGORY HIERARCHY - UPDATED WITH ALL 51 STATES
const CATEGORY_HIERARCHY = {
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
    description: "Insurance requirements, laws, and average rates for all 51 states",
    icon: "🗺️",
    subcategories: {
      "alabama": "Alabama Insurance Guide",
      "alaska": "Alaska Insurance Guide",
      "arizona": "Arizona Insurance Guide",
      "arkansas": "Arkansas Insurance Guide",
      "california": "California Insurance Guide",
      "colorado": "Colorado Insurance Guide",
      "connecticut": "Connecticut Insurance Guide",
      "delaware": "Delaware Insurance Guide",
      "florida": "Florida Insurance Guide",
      "georgia": "Georgia Insurance Guide",
      "hawaii": "Hawaii Insurance Guide",
      "idaho": "Idaho Insurance Guide",
      "illinois": "Illinois Insurance Guide",
      "indiana": "Indiana Insurance Guide",
      "iowa": "Iowa Insurance Guide",
      "kansas": "Kansas Insurance Guide",
      "kentucky": "Kentucky Insurance Guide",
      "louisiana": "Louisiana Insurance Guide",
      "maine": "Maine Insurance Guide",
      "maryland": "Maryland Insurance Guide",
      "massachusetts": "Massachusetts Insurance Guide",
      "michigan": "Michigan Insurance Guide",
      "minnesota": "Minnesota Insurance Guide",
      "mississippi": "Mississippi Insurance Guide",
      "missouri": "Missouri Insurance Guide",
      "montana": "Montana Insurance Guide",
      "nebraska": "Nebraska Insurance Guide",
      "nevada": "Nevada Insurance Guide",
      "new-hampshire": "New Hampshire Insurance Guide",
      "new-jersey": "New Jersey Insurance Guide",
      "new-mexico": "New Mexico Insurance Guide",
      "new-york": "New York Insurance Guide",
      "north-carolina": "North Carolina Insurance Guide",
      "north-dakota": "North Dakota Insurance Guide",
      "ohio": "Ohio Insurance Guide",
      "oklahoma": "Oklahoma Insurance Guide",
      "oregon": "Oregon Insurance Guide",
      "pennsylvania": "Pennsylvania Insurance Guide",
      "rhode-island": "Rhode Island Insurance Guide",
      "south-carolina": "South Carolina Insurance Guide",
      "south-dakota": "South Dakota Insurance Guide",
      "tennessee": "Tennessee Insurance Guide",
      "texas": "Texas Insurance Guide",
      "utah": "Utah Insurance Guide",
      "vermont": "Vermont Insurance Guide",
      "virginia": "Virginia Insurance Guide",
      "washington": "Washington Insurance Guide",
      "west-virginia": "West Virginia Insurance Guide",
      "wisconsin": "Wisconsin Insurance Guide",
      "wyoming": "Wyoming Insurance Guide",
      "washington-dc": "Washington DC Insurance Guide"
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

export { CATEGORY_HIERARCHY as C };
