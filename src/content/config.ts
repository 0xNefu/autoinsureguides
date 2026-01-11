import { defineCollection, z } from "astro:content";

// 1. POSTS COLLECTION (General insurance articles)
const posts = defineCollection({
  type: "content",
  schema: z.object({ // ✅ REMOVED the ({ image }) destructure
    // ✅ ORIGINAL WORKING FIELDS (from crypto site):
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(), // ✅ CHANGED BACK to z.string()
    heroImageAlt: z.string().optional(),
    authors: z.array(z.string()).default(["AutoInsureGuides Team"]),
    authorTwitter: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    subcategory: z.string().optional(),
    draft: z.boolean().default(true),
    hasGatedContent: z.boolean().default(false),
    gateType: z.enum(['full', 'partial', 'none']).default('none'),
    
    // ✅ YOUR NEW INSURANCE FIELDS (preserved):
    insuranceType: z.enum(['personal', 'commercial', 'specialty']).default('personal'),
    vehicleType: z.enum(['car', 'truck', 'motorcycle', 'rv', 'boat', 'classic', 'none']).optional().default('none'),
    state: z.string().optional(),
    coverageLevel: z.enum(['minimum', 'standard', 'premium', 'none']).optional().default('none'),
    premiumRange: z.string().optional(),
    savingsPotential: z.string().optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    targetAudience: z.array(z.string()).optional().default([]),
    adKeywords: z.array(z.string()).optional().default([]),
    affiliateProducts: z.array(z.string()).optional().default([]),
    canonicalUrl: z.string().optional(),
    noindex: z.boolean().default(true),
    priority: z.number().min(0).max(1).optional().default(0.5),
  }),
});

// 2. STATES COLLECTION
const states = defineCollection({
  type: "content",
  schema: z.object({ // ✅ REMOVED ({ image })
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(), // ✅ CHANGED BACK to z.string()
    heroImageAlt: z.string().optional(),
    
    // State-specific fields
    state: z.string(),
    stateName: z.string(),
    stateAbbreviation: z.string().length(2),
    insuranceTypes: z.array(z.enum(['auto', 'home', 'health', 'life', 'renters'])).default(['auto']),
    vehicleTypes: z.array(z.enum(['car', 'truck', 'motorcycle', 'rv', 'boat', 'classic'])).optional().default(['car']),
    averagePremium: z.string(),
    minimumCoverage: z.string(),
    mandatoryCoverage: z.array(z.string()).default(["Liability"]),
    uniqueLaws: z.array(z.string()).default([]),
    savingsTips: z.array(z.string()).default([]),
    topDiscounts: z.array(z.string()).default([]),
    recommendedCompanies: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    noindex: z.boolean().default(true),
    canonicalUrl: z.string().optional(),
    priority: z.number().min(0).max(1).optional().default(0.8),
  }),
});

// 3. VEHICLES COLLECTION
const vehicles = defineCollection({
  type: "content",
  schema: z.object({ // ✅ REMOVED ({ image })
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    
    // Vehicle-specific
    vehicleType: z.enum(['car', 'truck', 'motorcycle', 'rv', 'boat', 'classic']),
    vehicleSubtype: z.string().optional(),
    
    // Insurance data
    averagePremium: z.string().optional(),
    coverageRequirements: z.array(z.string()).default([]),
    specialConsiderations: z.array(z.string()).default([]),
    
    // Publishing
    draft: z.boolean().default(true),
    noindex: z.boolean().default(true),
  }),
});

// 4. COMPANIES COLLECTION
const companies = defineCollection({
  type: "content",
  schema: z.object({ // ✅ REMOVED ({ image })
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    
    // Company data
    companyName: z.string(),
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