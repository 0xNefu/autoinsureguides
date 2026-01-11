import { getCollection } from 'astro:content';

async function testStates() {
  const states = await getCollection('states');
  console.log("State count:", states.length);
  console.log("Sample state:", states[0]?.data?.stateName);
  
  // Check draft status
  const published = states.filter(s => !s.data.draft);
  const drafts = states.filter(s => s.data.draft);
  
  console.log("Published:", published.length);
  console.log("Drafts:", drafts.length);
}

testStates();
