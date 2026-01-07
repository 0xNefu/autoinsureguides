// Test categories
import { getCategoriesWithCounts } from "@/lib/utils/categoryCounter";

const categories = await getCategoriesWithCounts();
console.log("Categories found:", categories);
console.log("Number of categories:", categories.length);
