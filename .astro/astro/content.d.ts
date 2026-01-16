declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"accidents": {
"alabama.md": {
	id: "alabama.md";
  slug: "alabama";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"alaska.md": {
	id: "alaska.md";
  slug: "alaska";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"arizona.md": {
	id: "arizona.md";
  slug: "arizona";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"arkansas.md": {
	id: "arkansas.md";
  slug: "arkansas";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"california.md": {
	id: "california.md";
  slug: "california";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"colorado.md": {
	id: "colorado.md";
  slug: "colorado";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"connecticut.md": {
	id: "connecticut.md";
  slug: "connecticut";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"delaware.md": {
	id: "delaware.md";
  slug: "delaware";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"district-of-columbia.md": {
	id: "district-of-columbia.md";
  slug: "district-of-columbia";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"florida.md": {
	id: "florida.md";
  slug: "florida";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"georgia.md": {
	id: "georgia.md";
  slug: "georgia";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"hawaii.md": {
	id: "hawaii.md";
  slug: "hawaii";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"idaho.md": {
	id: "idaho.md";
  slug: "idaho";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"illinois.md": {
	id: "illinois.md";
  slug: "illinois";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"indiana.md": {
	id: "indiana.md";
  slug: "indiana";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"iowa.md": {
	id: "iowa.md";
  slug: "iowa";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"kansas.md": {
	id: "kansas.md";
  slug: "kansas";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"kentucky.md": {
	id: "kentucky.md";
  slug: "kentucky";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"louisiana.md": {
	id: "louisiana.md";
  slug: "louisiana";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"maine.md": {
	id: "maine.md";
  slug: "maine";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"maryland.md": {
	id: "maryland.md";
  slug: "maryland";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"massachusetts.md": {
	id: "massachusetts.md";
  slug: "massachusetts";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"michigan.md": {
	id: "michigan.md";
  slug: "michigan";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"minnesota.md": {
	id: "minnesota.md";
  slug: "minnesota";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"mississippi.md": {
	id: "mississippi.md";
  slug: "mississippi";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"missouri.md": {
	id: "missouri.md";
  slug: "missouri";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"montana.md": {
	id: "montana.md";
  slug: "montana";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"nebraska.md": {
	id: "nebraska.md";
  slug: "nebraska";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"nevada.md": {
	id: "nevada.md";
  slug: "nevada";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"new-hampshire.md": {
	id: "new-hampshire.md";
  slug: "new-hampshire";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"new-jersey.md": {
	id: "new-jersey.md";
  slug: "new-jersey";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"new-mexico.md": {
	id: "new-mexico.md";
  slug: "new-mexico";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"new-york.md": {
	id: "new-york.md";
  slug: "new-york";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"north-carolina.md": {
	id: "north-carolina.md";
  slug: "north-carolina";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"north-dakota.md": {
	id: "north-dakota.md";
  slug: "north-dakota";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"ohio.md": {
	id: "ohio.md";
  slug: "ohio";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"oklahoma.md": {
	id: "oklahoma.md";
  slug: "oklahoma";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"oregon.md": {
	id: "oregon.md";
  slug: "oregon";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"pennsylvania.md": {
	id: "pennsylvania.md";
  slug: "pennsylvania";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"rhode-island.md": {
	id: "rhode-island.md";
  slug: "rhode-island";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"south-carolina.md": {
	id: "south-carolina.md";
  slug: "south-carolina";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"south-dakota.md": {
	id: "south-dakota.md";
  slug: "south-dakota";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"tennessee.md": {
	id: "tennessee.md";
  slug: "tennessee";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"texas.md": {
	id: "texas.md";
  slug: "texas";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"utah.md": {
	id: "utah.md";
  slug: "utah";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"vermont.md": {
	id: "vermont.md";
  slug: "vermont";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"virginia.md": {
	id: "virginia.md";
  slug: "virginia";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"washington.md": {
	id: "washington.md";
  slug: "washington";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"west-virginia.md": {
	id: "west-virginia.md";
  slug: "west-virginia";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"wisconsin.md": {
	id: "wisconsin.md";
  slug: "wisconsin";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
"wyoming.md": {
	id: "wyoming.md";
  slug: "wyoming";
  body: string;
  collection: "accidents";
  data: InferEntrySchema<"accidents">
} & { render(): Render[".md"] };
};
"auto-insurance": {
"alabama.md": {
	id: "alabama.md";
  slug: "alabama";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"alaska.md": {
	id: "alaska.md";
  slug: "alaska";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"arizona.md": {
	id: "arizona.md";
  slug: "arizona";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"arkansas.md": {
	id: "arkansas.md";
  slug: "arkansas";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"california.md": {
	id: "california.md";
  slug: "california";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"california/test-article.md": {
	id: "california/test-article.md";
  slug: "california/test-article";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"colorado.md": {
	id: "colorado.md";
  slug: "colorado";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"connecticut.md": {
	id: "connecticut.md";
  slug: "connecticut";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"delaware.md": {
	id: "delaware.md";
  slug: "delaware";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"district-of-columbia.md": {
	id: "district-of-columbia.md";
  slug: "district-of-columbia";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"florida.md": {
	id: "florida.md";
  slug: "florida";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"georgia.md": {
	id: "georgia.md";
  slug: "georgia";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"hawaii.md": {
	id: "hawaii.md";
  slug: "hawaii";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"idaho.md": {
	id: "idaho.md";
  slug: "idaho";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"illinois.md": {
	id: "illinois.md";
  slug: "illinois";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"indiana.md": {
	id: "indiana.md";
  slug: "indiana";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"iowa.md": {
	id: "iowa.md";
  slug: "iowa";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"kansas.md": {
	id: "kansas.md";
  slug: "kansas";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"kentucky.md": {
	id: "kentucky.md";
  slug: "kentucky";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"louisiana.md": {
	id: "louisiana.md";
  slug: "louisiana";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"maine.md": {
	id: "maine.md";
  slug: "maine";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"maryland.md": {
	id: "maryland.md";
  slug: "maryland";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"massachusetts.md": {
	id: "massachusetts.md";
  slug: "massachusetts";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"michigan.md": {
	id: "michigan.md";
  slug: "michigan";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"minnesota.md": {
	id: "minnesota.md";
  slug: "minnesota";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"mississippi.md": {
	id: "mississippi.md";
  slug: "mississippi";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"missouri.md": {
	id: "missouri.md";
  slug: "missouri";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"montana.md": {
	id: "montana.md";
  slug: "montana";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"nebraska.md": {
	id: "nebraska.md";
  slug: "nebraska";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"nevada.md": {
	id: "nevada.md";
  slug: "nevada";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"new-hampshire.md": {
	id: "new-hampshire.md";
  slug: "new-hampshire";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"new-jersey.md": {
	id: "new-jersey.md";
  slug: "new-jersey";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"new-mexico.md": {
	id: "new-mexico.md";
  slug: "new-mexico";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"new-york.md": {
	id: "new-york.md";
  slug: "new-york";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"north-carolina.md": {
	id: "north-carolina.md";
  slug: "north-carolina";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"north-dakota.md": {
	id: "north-dakota.md";
  slug: "north-dakota";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"ohio.md": {
	id: "ohio.md";
  slug: "ohio";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"oklahoma.md": {
	id: "oklahoma.md";
  slug: "oklahoma";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"oregon.md": {
	id: "oregon.md";
  slug: "oregon";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"pennsylvania.md": {
	id: "pennsylvania.md";
  slug: "pennsylvania";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"rhode-island.md": {
	id: "rhode-island.md";
  slug: "rhode-island";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"south-carolina.md": {
	id: "south-carolina.md";
  slug: "south-carolina";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"south-dakota.md": {
	id: "south-dakota.md";
  slug: "south-dakota";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"tennessee.md": {
	id: "tennessee.md";
  slug: "tennessee";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"texas.md": {
	id: "texas.md";
  slug: "texas";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"utah.md": {
	id: "utah.md";
  slug: "utah";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"vermont.md": {
	id: "vermont.md";
  slug: "vermont";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"virginia.md": {
	id: "virginia.md";
  slug: "virginia";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"washington.md": {
	id: "washington.md";
  slug: "washington";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"west-virginia.md": {
	id: "west-virginia.md";
  slug: "west-virginia";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"wisconsin.md": {
	id: "wisconsin.md";
  slug: "wisconsin";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
"wyoming.md": {
	id: "wyoming.md";
  slug: "wyoming";
  body: string;
  collection: "auto-insurance";
  data: InferEntrySchema<"auto-insurance">
} & { render(): Render[".md"] };
};
"find-help": {
"alabama.md": {
	id: "alabama.md";
  slug: "alabama";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"alaska.md": {
	id: "alaska.md";
  slug: "alaska";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"arizona.md": {
	id: "arizona.md";
  slug: "arizona";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"arkansas.md": {
	id: "arkansas.md";
  slug: "arkansas";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"california.md": {
	id: "california.md";
  slug: "california";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"colorado.md": {
	id: "colorado.md";
  slug: "colorado";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"connecticut.md": {
	id: "connecticut.md";
  slug: "connecticut";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"delaware.md": {
	id: "delaware.md";
  slug: "delaware";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"district-of-columbia.md": {
	id: "district-of-columbia.md";
  slug: "district-of-columbia";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"florida.md": {
	id: "florida.md";
  slug: "florida";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"georgia.md": {
	id: "georgia.md";
  slug: "georgia";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"hawaii.md": {
	id: "hawaii.md";
  slug: "hawaii";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"idaho.md": {
	id: "idaho.md";
  slug: "idaho";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"illinois.md": {
	id: "illinois.md";
  slug: "illinois";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"indiana.md": {
	id: "indiana.md";
  slug: "indiana";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"iowa.md": {
	id: "iowa.md";
  slug: "iowa";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"kansas.md": {
	id: "kansas.md";
  slug: "kansas";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"kentucky.md": {
	id: "kentucky.md";
  slug: "kentucky";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"local-insurance-help.md": {
	id: "local-insurance-help.md";
  slug: "local-insurance-help";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"louisiana.md": {
	id: "louisiana.md";
  slug: "louisiana";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"maine.md": {
	id: "maine.md";
  slug: "maine";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"maryland.md": {
	id: "maryland.md";
  slug: "maryland";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"massachusetts.md": {
	id: "massachusetts.md";
  slug: "massachusetts";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"michigan.md": {
	id: "michigan.md";
  slug: "michigan";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"minnesota.md": {
	id: "minnesota.md";
  slug: "minnesota";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"mississippi.md": {
	id: "mississippi.md";
  slug: "mississippi";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"missouri.md": {
	id: "missouri.md";
  slug: "missouri";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"montana.md": {
	id: "montana.md";
  slug: "montana";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"nebraska.md": {
	id: "nebraska.md";
  slug: "nebraska";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"nevada.md": {
	id: "nevada.md";
  slug: "nevada";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"new-hampshire.md": {
	id: "new-hampshire.md";
  slug: "new-hampshire";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"new-jersey.md": {
	id: "new-jersey.md";
  slug: "new-jersey";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"new-mexico.md": {
	id: "new-mexico.md";
  slug: "new-mexico";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"new-york.md": {
	id: "new-york.md";
  slug: "new-york";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"north-carolina.md": {
	id: "north-carolina.md";
  slug: "north-carolina";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"north-dakota.md": {
	id: "north-dakota.md";
  slug: "north-dakota";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"ohio.md": {
	id: "ohio.md";
  slug: "ohio";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"oklahoma.md": {
	id: "oklahoma.md";
  slug: "oklahoma";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"oregon.md": {
	id: "oregon.md";
  slug: "oregon";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"pennsylvania.md": {
	id: "pennsylvania.md";
  slug: "pennsylvania";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"rhode-island.md": {
	id: "rhode-island.md";
  slug: "rhode-island";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"south-carolina.md": {
	id: "south-carolina.md";
  slug: "south-carolina";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"south-dakota.md": {
	id: "south-dakota.md";
  slug: "south-dakota";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"tennessee.md": {
	id: "tennessee.md";
  slug: "tennessee";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"texas.md": {
	id: "texas.md";
  slug: "texas";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"utah.md": {
	id: "utah.md";
  slug: "utah";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"vermont.md": {
	id: "vermont.md";
  slug: "vermont";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"virginia.md": {
	id: "virginia.md";
  slug: "virginia";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"washington.md": {
	id: "washington.md";
  slug: "washington";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"west-virginia.md": {
	id: "west-virginia.md";
  slug: "west-virginia";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"wisconsin.md": {
	id: "wisconsin.md";
  slug: "wisconsin";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
"wyoming.md": {
	id: "wyoming.md";
  slug: "wyoming";
  body: string;
  collection: "find-help";
  data: InferEntrySchema<"find-help">
} & { render(): Render[".md"] };
};
"posts": {
"car-insurance-basics/comprehensive-vs-collision.md": {
	id: "car-insurance-basics/comprehensive-vs-collision.md";
  slug: "car-insurance-basics/comprehensive-vs-collision";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"car-insurance-basics/insurance-basics.md": {
	id: "car-insurance-basics/insurance-basics.md";
  slug: "car-insurance-basics/insurance-basics";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"car-insurance-basics/what-is-liability-insurance.md": {
	id: "car-insurance-basics/what-is-liability-insurance.md";
  slug: "car-insurance-basics/what-is-liability-insurance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"claims-accidents-help/after-accident-checklist.md": {
	id: "claims-accidents-help/after-accident-checklist.md";
  slug: "claims-accidents-help/after-accident-checklist";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"claims-accidents-help/how-to-file-insurance-claim.md": {
	id: "claims-accidents-help/how-to-file-insurance-claim.md";
  slug: "claims-accidents-help/how-to-file-insurance-claim";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"commercial-fleet-insurance/advanced-strategies.md": {
	id: "commercial-fleet-insurance/advanced-strategies.md";
  slug: "commercial-fleet-insurance/advanced-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"commercial-fleet-insurance/advanced-truck-strategies.md": {
	id: "commercial-fleet-insurance/advanced-truck-strategies.md";
  slug: "commercial-fleet-insurance/advanced-truck-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"saving-money-discounts/credit-score-insurance-impact.md": {
	id: "saving-money-discounts/credit-score-insurance-impact.md";
  slug: "saving-money-discounts/credit-score-insurance-impact";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"saving-money-discounts/insurance-discounts-list.md": {
	id: "saving-money-discounts/insurance-discounts-list.md";
  slug: "saving-money-discounts/insurance-discounts-list";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"saving-money-discounts/save-500-on-insurance.md": {
	id: "saving-money-discounts/save-500-on-insurance.md";
  slug: "saving-money-discounts/save-500-on-insurance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"saving-money-discounts/save-money.md": {
	id: "saving-money-discounts/save-money.md";
  slug: "saving-money-discounts/save-money";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"state-insurance-guides/california-insurance-requirements.md": {
	id: "state-insurance-guides/california-insurance-requirements.md";
  slug: "state-insurance-guides/california-insurance-requirements";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"state-insurance-guides/florida-no-fault-insurance.md": {
	id: "state-insurance-guides/florida-no-fault-insurance.md";
  slug: "state-insurance-guides/florida-no-fault-insurance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"state-insurance-guides/state-requirements.md": {
	id: "state-insurance-guides/state-requirements.md";
  slug: "state-insurance-guides/state-requirements";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
};
"states": {
"alabama/car-insurance.md": {
	id: "alabama/car-insurance.md";
  slug: "alabama/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"alaska/car-insurance.md": {
	id: "alaska/car-insurance.md";
  slug: "alaska/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"arizona/car-insurance.md": {
	id: "arizona/car-insurance.md";
  slug: "arizona/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"arkansas/car-insurance.md": {
	id: "arkansas/car-insurance.md";
  slug: "arkansas/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"california/car-insurance.md": {
	id: "california/car-insurance.md";
  slug: "california/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"colorado/car-insurance.md": {
	id: "colorado/car-insurance.md";
  slug: "colorado/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"connecticut/car-insurance.md": {
	id: "connecticut/car-insurance.md";
  slug: "connecticut/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"delaware/car-insurance.md": {
	id: "delaware/car-insurance.md";
  slug: "delaware/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"florida/car-insurance.md": {
	id: "florida/car-insurance.md";
  slug: "florida/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"georgia/car-insurance.md": {
	id: "georgia/car-insurance.md";
  slug: "georgia/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"hawaii/car-insurance.md": {
	id: "hawaii/car-insurance.md";
  slug: "hawaii/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"idaho/car-insurance.md": {
	id: "idaho/car-insurance.md";
  slug: "idaho/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"illinois/car-insurance.md": {
	id: "illinois/car-insurance.md";
  slug: "illinois/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"indiana/car-insurance.md": {
	id: "indiana/car-insurance.md";
  slug: "indiana/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"iowa/car-insurance.md": {
	id: "iowa/car-insurance.md";
  slug: "iowa/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"kansas/car-insurance.md": {
	id: "kansas/car-insurance.md";
  slug: "kansas/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"kentucky/car-insurance.md": {
	id: "kentucky/car-insurance.md";
  slug: "kentucky/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"louisiana/car-insurance.md": {
	id: "louisiana/car-insurance.md";
  slug: "louisiana/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"maine/car-insurance.md": {
	id: "maine/car-insurance.md";
  slug: "maine/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"maryland/car-insurance.md": {
	id: "maryland/car-insurance.md";
  slug: "maryland/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"massachusetts/car-insurance.md": {
	id: "massachusetts/car-insurance.md";
  slug: "massachusetts/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"michigan/car-insurance.md": {
	id: "michigan/car-insurance.md";
  slug: "michigan/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"minnesota/car-insurance.md": {
	id: "minnesota/car-insurance.md";
  slug: "minnesota/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"mississippi/car-insurance.md": {
	id: "mississippi/car-insurance.md";
  slug: "mississippi/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"missouri/car-insurance.md": {
	id: "missouri/car-insurance.md";
  slug: "missouri/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"montana/car-insurance.md": {
	id: "montana/car-insurance.md";
  slug: "montana/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"nebraska/car-insurance.md": {
	id: "nebraska/car-insurance.md";
  slug: "nebraska/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"nevada/car-insurance.md": {
	id: "nevada/car-insurance.md";
  slug: "nevada/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"new-hampshire/car-insurance.md": {
	id: "new-hampshire/car-insurance.md";
  slug: "new-hampshire/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"new-jersey/car-insurance.md": {
	id: "new-jersey/car-insurance.md";
  slug: "new-jersey/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"new-mexico/car-insurance.md": {
	id: "new-mexico/car-insurance.md";
  slug: "new-mexico/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"new-york/car-insurance.md": {
	id: "new-york/car-insurance.md";
  slug: "new-york/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"north-carolina/car-insurance.md": {
	id: "north-carolina/car-insurance.md";
  slug: "north-carolina/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"north-dakota/car-insurance.md": {
	id: "north-dakota/car-insurance.md";
  slug: "north-dakota/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"ohio/car-insurance.md": {
	id: "ohio/car-insurance.md";
  slug: "ohio/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"oklahoma/car-insurance.md": {
	id: "oklahoma/car-insurance.md";
  slug: "oklahoma/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"oregon/car-insurance.md": {
	id: "oregon/car-insurance.md";
  slug: "oregon/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"pennsylvania/car-insurance.md": {
	id: "pennsylvania/car-insurance.md";
  slug: "pennsylvania/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"rhode-island/car-insurance.md": {
	id: "rhode-island/car-insurance.md";
  slug: "rhode-island/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"south-carolina/car-insurance.md": {
	id: "south-carolina/car-insurance.md";
  slug: "south-carolina/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"south-dakota/car-insurance.md": {
	id: "south-dakota/car-insurance.md";
  slug: "south-dakota/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"tennessee/car-insurance.md": {
	id: "tennessee/car-insurance.md";
  slug: "tennessee/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"texas/car-insurance.md": {
	id: "texas/car-insurance.md";
  slug: "texas/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"utah/car-insurance.md": {
	id: "utah/car-insurance.md";
  slug: "utah/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"vermont/car-insurance.md": {
	id: "vermont/car-insurance.md";
  slug: "vermont/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"virginia/car-insurance.md": {
	id: "virginia/car-insurance.md";
  slug: "virginia/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"washington/car-insurance.md": {
	id: "washington/car-insurance.md";
  slug: "washington/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"west-virginia/car-insurance.md": {
	id: "west-virginia/car-insurance.md";
  slug: "west-virginia/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"wisconsin/car-insurance.md": {
	id: "wisconsin/car-insurance.md";
  slug: "wisconsin/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
"wyoming/car-insurance.md": {
	id: "wyoming/car-insurance.md";
  slug: "wyoming/car-insurance";
  body: string;
  collection: "states";
  data: any
} & { render(): Render[".md"] };
};
"traffic-laws": {
"alabama.md": {
	id: "alabama.md";
  slug: "alabama";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"alaska.md": {
	id: "alaska.md";
  slug: "alaska";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"arizona.md": {
	id: "arizona.md";
  slug: "arizona";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"arkansas.md": {
	id: "arkansas.md";
  slug: "arkansas";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"california.md": {
	id: "california.md";
  slug: "california";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"colorado.md": {
	id: "colorado.md";
  slug: "colorado";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"connecticut.md": {
	id: "connecticut.md";
  slug: "connecticut";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"delaware.md": {
	id: "delaware.md";
  slug: "delaware";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"district-of-columbia.md": {
	id: "district-of-columbia.md";
  slug: "district-of-columbia";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"florida.md": {
	id: "florida.md";
  slug: "florida";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"georgia.md": {
	id: "georgia.md";
  slug: "georgia";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"hawaii.md": {
	id: "hawaii.md";
  slug: "hawaii";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"idaho.md": {
	id: "idaho.md";
  slug: "idaho";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"illinois.md": {
	id: "illinois.md";
  slug: "illinois";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"indiana.md": {
	id: "indiana.md";
  slug: "indiana";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"iowa.md": {
	id: "iowa.md";
  slug: "iowa";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"kansas.md": {
	id: "kansas.md";
  slug: "kansas";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"kentucky.md": {
	id: "kentucky.md";
  slug: "kentucky";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"louisiana.md": {
	id: "louisiana.md";
  slug: "louisiana";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"maine.md": {
	id: "maine.md";
  slug: "maine";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"maryland.md": {
	id: "maryland.md";
  slug: "maryland";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"massachusetts.md": {
	id: "massachusetts.md";
  slug: "massachusetts";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"michigan.md": {
	id: "michigan.md";
  slug: "michigan";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"minnesota.md": {
	id: "minnesota.md";
  slug: "minnesota";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"mississippi.md": {
	id: "mississippi.md";
  slug: "mississippi";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"missouri.md": {
	id: "missouri.md";
  slug: "missouri";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"montana.md": {
	id: "montana.md";
  slug: "montana";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"nebraska.md": {
	id: "nebraska.md";
  slug: "nebraska";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"nevada.md": {
	id: "nevada.md";
  slug: "nevada";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"new-hampshire.md": {
	id: "new-hampshire.md";
  slug: "new-hampshire";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"new-jersey.md": {
	id: "new-jersey.md";
  slug: "new-jersey";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"new-mexico.md": {
	id: "new-mexico.md";
  slug: "new-mexico";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"new-york.md": {
	id: "new-york.md";
  slug: "new-york";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"north-carolina.md": {
	id: "north-carolina.md";
  slug: "north-carolina";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"north-dakota.md": {
	id: "north-dakota.md";
  slug: "north-dakota";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"ohio.md": {
	id: "ohio.md";
  slug: "ohio";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"oklahoma.md": {
	id: "oklahoma.md";
  slug: "oklahoma";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"oregon.md": {
	id: "oregon.md";
  slug: "oregon";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"pennsylvania.md": {
	id: "pennsylvania.md";
  slug: "pennsylvania";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"rhode-island.md": {
	id: "rhode-island.md";
  slug: "rhode-island";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"south-carolina.md": {
	id: "south-carolina.md";
  slug: "south-carolina";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"south-dakota.md": {
	id: "south-dakota.md";
  slug: "south-dakota";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"tennessee.md": {
	id: "tennessee.md";
  slug: "tennessee";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"texas.md": {
	id: "texas.md";
  slug: "texas";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"utah.md": {
	id: "utah.md";
  slug: "utah";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"vermont.md": {
	id: "vermont.md";
  slug: "vermont";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"virginia.md": {
	id: "virginia.md";
  slug: "virginia";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"washington.md": {
	id: "washington.md";
  slug: "washington";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"west-virginia.md": {
	id: "west-virginia.md";
  slug: "west-virginia";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"wisconsin.md": {
	id: "wisconsin.md";
  slug: "wisconsin";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
"wyoming.md": {
	id: "wyoming.md";
  slug: "wyoming";
  body: string;
  collection: "traffic-laws";
  data: InferEntrySchema<"traffic-laws">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"companies": Record<string, {
  id: string;
  collection: "companies";
  data: any;
}>;
"vehicles": Record<string, {
  id: string;
  collection: "vehicles";
  data: any;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
