import { defineCollection, z } from 'astro:content';

// Define a shared schema for all articles
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  updatedDate: z.date().optional(),
  state: z.string().optional(), // e.g., "CA", "TX" - optional for non-state articles
  featured: z.boolean().default(false),
  draft: z.boolean().default(true),
  noindex: z.boolean().default(false),
  // ... keep your existing fields like image, authors, etc.
});

// ================ ALL 51 STATES ================
const ALL_STATES = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california',
  'colorado', 'connecticut', 'delaware', 'florida', 'georgia',
  'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
  'kansas', 'kentucky', 'louisiana', 'maine', 'maryland',
  'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri',
  'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
  'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
  'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina',
  'south-dakota', 'tennessee', 'texas', 'utah', 'vermont',
  'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming',
  'washington-dc'
] as const;

// ================ TOPICAL SUBCATEGORIES ================
const INSURANCE_GUIDES_TOPICS = ['car-insurance-basics', 'cost-discounts', 'company-reviews', 'saving-tips'] as const;
const ACCIDENT_HELP_TOPICS = ['claims-process', 'injury-guides', 'medical-bills', 'settlement-negotiation'] as const;
const TRAFFIC_TICKETS_TOPICS = ['speeding-tickets', 'dui-dwi', 'license-suspension', 'moving-violations'] as const;
const FIND_HELP_TOPICS = ['find-attorney', 'insurance-quotes', 'compare-companies', 'legal-advice'] as const;

// 1. STATE INSURANCE GUIDES
const insuranceGuidesCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    pillar: z.literal('auto-insurance'),
    subcategory: z.enum([...ALL_STATES, ...INSURANCE_GUIDES_TOPICS])
  })
});

// 2. ACCIDENT & INJURY HELP
const accidentHelpCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    pillar: z.literal('accidents'),
    subcategory: z.enum([...ALL_STATES, ...ACCIDENT_HELP_TOPICS])
  })
});

// 3. TRAFFIC TICKETS & LAWS
const trafficTicketsCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    pillar: z.literal('traffic-laws'),
    subcategory: z.enum([...ALL_STATES, ...TRAFFIC_TICKETS_TOPICS])
  })
});

// 4. FIND LOCAL HELP
const findHelpCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    pillar: z.literal('find-help'),
    subcategory: z.enum([...ALL_STATES, ...FIND_HELP_TOPICS])
  })
});

// Export all collections
export const collections = {
  'auto-insurance': insuranceGuidesCollection,
  'accidents': accidentHelpCollection,
  'traffic-laws': trafficTicketsCollection,
  'find-help': findHelpCollection,
};