import { defineCollection, z } from 'astro:content';

// Your 13 pillar categories for Auto Insurance
const blogCategories = [
  'car-insurance-basics',
  'cost-discounts', 
  'claims-accidents',
  'drivers-coverage',
  'state-guides',
  'company-reviews',
  'insurance-news',
  'saving-tips',
  'comparison-tools',
  'specialized-coverage',
  'legal-regulatory',
  'emergency-preparedness',
  'future-trends'
] as const;

const blogCollection = defineCollection({
  type: 'content',
  
  schema: z.object({
    // Required fields with defaults
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    
    // Category system - using auto insurance categories
    category: z.enum(blogCategories),
    subcategory: z.string().optional(),
    
    // Tags & draft
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    
    // ======================
    // GATING FIELDS - KEPT FOR PREMIUM CONTENT
    // ======================
    hasGatedContent: z.boolean().default(false),
    isFullyGated: z.boolean().default(false),
    // ======================
    
    // Image fields
    image: z.string().optional(),
    heroImageAlt: z.string().optional(),
    
    // Authors
    author: z.string().optional(),
    authors: z.array(z.string()).optional(),
    authorTwitter: z.string().optional(),
    
    // Insurance-specific metadata
    state: z.string().optional().describe("For state-specific guides"),
    insuranceCompany: z.string().optional().describe("For company review articles"),
    savingsAmount: z.string().optional().describe("Estimated savings in dollars"),
    coverageType: z.string().optional().describe("Type of coverage discussed"),
    vehicleType: z.string().optional().describe("Car, motorcycle, RV, etc."),
    driverType: z.string().optional().describe("Teen, senior, high-risk, etc."),
    
    // SEO fields
    meta_title: z.string().optional(),
    canonical: z.string().url().optional(),
    
    updatedDate: z.coerce.date().optional(),
    
    // AdSense/affiliate fields
    affiliateLinks: z.boolean().default(false).describe("Contains affiliate links"),
    adSenseApproved: z.boolean().default(true).describe("Content follows AdSense policies"),
    
    // Total freedom for anything else
  }).passthrough(),
});

export const collections = {
  posts: blogCollection,
  pages: defineCollection({ 
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      meta_title: z.string().optional(),
      image: z.string().optional(),
      noindex: z.boolean().default(false)
    }).passthrough()
  }),
  authors: defineCollection({ 
    type: 'content',
    schema: z.object({ 
      title: z.string(),
      image: z.string().optional(),
      description: z.string().optional(),
      meta_title: z.string().optional(),
      role: z.string().optional().describe("Insurance expert role"),
      credentials: z.array(z.string()).optional().describe("Professional credentials"),
      yearsExperience: z.number().optional(),
      social: z.object({
        linkedin: z.string().url().optional(),
        twitter: z.string().url().optional(),
        facebook: z.string().url().optional(),
        website: z.string().url().optional(),
      }).optional(),
    }).passthrough(),
  }),
  about: defineCollection({ 
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      meta_title: z.string().optional(),
      image: z.string().optional(),
    })
  }),
  contact: defineCollection({ 
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      meta_title: z.string().optional(),
      image: z.string().optional(),
    })
  }),
  // Insurance-specific collections
  states: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      stateCode: z.string().length(2),
      minimumLiability: z.string(),
      averageAnnualPremium: z.string().optional(),
      noFaultState: z.boolean().default(false),
      pipRequired: z.boolean().default(false),
      image: z.string().optional(),
      meta_title: z.string().optional(),
    }).passthrough()
  }),
  companies: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      rating: z.number().min(0).max(5),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
      jdPowerRating: z.string().optional(),
      amBestRating: z.string().optional(),
      averageAnnualPremium: z.string().optional(),
      image: z.string().optional(),
      meta_title: z.string().optional(),
      affiliateLink: z.string().url().optional(),
    }).passthrough()
  }),
  tools: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      toolType: z.enum(['calculator', 'comparison', 'guide', 'checklist']),
      affiliateLink: z.string().url().optional(),
      freeTool: z.boolean().default(true),
      image: z.string().optional(),
      meta_title: z.string().optional(),
    }).passthrough()
  }),
};