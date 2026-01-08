import { defineCollection, z } from "astro:content";

// 1. POSTS COLLECTION (General insurance articles)
const posts = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    // ? ALL TXCHYON FIELDS (preserved):
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: image().optional(),
    heroImageAlt: z.string().optional(),
    authors: z.array(z.string()).default(["AutoInsureGuides Team"]),
    authorTwitter: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    subcategory: z.string().optional(),
    draft: z.boolean().default(true),  // ⬅️ DEFAULT TO DRAFT
    hasGatedContent: z.boolean().default(false),
    gateType: z.enum(['full', 'partial', 'none']).default('none'),
    
    // ? ADD THESE INSURANCE FIELDS FOR MAX REVENUE:
    insuranceType: z.enum(['personal', 'commercial', 'specialty']).default('personal'),
    vehicleType: z.enum(['car', 'truck', 'motorcycle', 'rv', 'boat', 'classic', 'none']).optional().default('none'),
    state: z.string().optional(),
    coverageLevel: z.enum(['minimum', 'standard', 'premium', 'none']).optional().default('none'),
    premiumRange: z.string().optional(),
    savingsPotential: z.string().optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    targetAudience: z.array(z.string()).optional().default([]),
    
    // ? ADVERTISING OPTIMIZATION:
    adKeywords: z.array(z.string()).optional().default([]),
    affiliateProducts: z.array(z.string()).optional().default([]),
    
    // ? SEO OPTIMIZATION:
    canonicalUrl: z.string().optional(),
    noindex: z.boolean().default(true),  // ⬅️ DEFAULT TO NOINDEX
    priority: z.number().min(0).max(1).optional().default(0.5),
  }),
});

// 2. STATES COLLECTION (State-specific money pages) ⭐ NEW
const states = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    // Core fields
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: image().optional(),
    heroImageAlt: z.string().optional(),
    
    // ⭐ STATE-SPECIFIC FIELDS (MONEY PAGES)
    state: z.string(),  // REQUIRED: "california", "texas", etc.
    stateName: z.string(),  // "California"
    stateAbbreviation: z.string().length(2),  // "CA"
    
    // Insurance focus
    insuranceTypes: z.array(z.enum(['auto', 'home', 'health', 'life', 'renters'])).default(['auto']),
    vehicleTypes: z.array(z.enum(['car', 'truck', 'motorcycle', 'rv', 'boat', 'classic'])).optional().default(['car']),
    
    // State-specific data (HIGH RPM)
    averagePremium: z.string(),  // "$1,842/year" - RICH SNIPPET
    minimumCoverage: z.string(),  // "15/30/5" - STATE LAW
    mandatoryCoverage: z.array(z.string()).default(["Liability"]),
    uniqueLaws: z.array(z.string()).default([]),
    
    // Conversion boosters
    savingsTips: z.array(z.string()).default([]),
    topDiscounts: z.array(z.string()).default([]),
    recommendedCompanies: z.array(z.string()).default([]),
    
    // Publishing control
    draft: z.boolean().default(true),
    noindex: z.boolean().default(true),
    
    // SEO
    canonicalUrl: z.string().optional(),
    priority: z.number().min(0).max(1).optional().default(0.8),  // Higher priority
  }),
});

// 3. VEHICLES COLLECTION (Vehicle-specific guides) ⭐ NEW
const vehicles = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    
    // Vehicle-specific
    vehicleType: z.enum(['car', 'truck', 'motorcycle', 'rv', 'boat', 'classic']),
    vehicleSubtype: z.string().optional(),  // "sedan", "SUV", "pickup", etc.
    
    // Insurance data
    averagePremium: z.string().optional(),
    coverageRequirements: z.array(z.string()).default([]),
    specialConsiderations: z.array(z.string()).default([]),
    
    // Publishing
    draft: z.boolean().default(true),
    noindex: z.boolean().default(true),
  }),
});

// 4. COMPANIES COLLECTION (Insurance company reviews) ⭐ NEW
const companies = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    
    // Company data
    companyName: z.string(),  // "Geico", "State Farm", etc.
    companyType: z.enum(['national', 'regional', 'direct', 'agent']),
    rating: z.number().min(1).max(5).optional(),
    
    // Coverage offered
    insuranceTypes: z.array(z.enum(['auto', 'home', 'health', 'life'])).default(['auto']),
    statesAvailable: z.array(z.string()).default([]),
    
    // Affiliate focus
    affiliateLink: z.string().optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    
    // Publishing
    draft: z.boolean().default(true),
    noindex: z.boolean().default(true),
  }),
});

// Export all collections
export const collections = { posts, states, vehicles, companies };