import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    // ? ALL TXCHYON FIELDS (preserved):
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    updatedDate: z.string().or(z.date()).transform((val) => new Date(val)).optional(),
    image: z.string().optional(),
    heroImageAlt: z.string().optional(),
    authors: z.array(z.string()).default(["AutoInsureGuides Team"]),
    authorTwitter: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    subcategory: z.string().optional(),
    draft: z.boolean().default(false),
    hasGatedContent: z.boolean().default(false),
    gateType: z.enum(['full', 'partial', 'none']).default('none'),
    
    // ? ADD THESE INSURANCE FIELDS FOR MAX REVENUE:
    insuranceType: z.enum(['personal', 'commercial', 'specialty']).default('personal'),
    vehicleType: z.enum(['car', 'truck', 'motorcycle', 'rv', 'boat', 'classic']).optional(),
    state: z.string().optional(),  // For state-specific content = higher RPM
    coverageLevel: z.enum(['minimum', 'standard', 'premium']).optional(),
    premiumRange: z.string().optional(),  // "$500-$1000/year" - for rich snippets
    savingsPotential: z.string().optional(),  // "Save up to 40%" - conversion booster
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    targetAudience: z.array(z.string()).optional(),  // ["teen-drivers", "seniors", "business-owners"]
    
    // ? ADVERTISING OPTIMIZATION:
    adKeywords: z.array(z.string()).optional(),  // Manual ad keyword targeting
    affiliateProducts: z.array(z.string()).optional(),  // Specific affiliate offers to promote
  }),
});

export const collections = { posts };
