/***********************************
 * 
 *             Config
 * 
 ***********************************/
 export interface SettingsI18nAttributes {
  id: number;
  name: string;
  code: string;
  isDefault: boolean;
}

/***********************************
 * 
 *             LocaleType
 * 
 ***********************************/
export interface LocaleTypeAttributes {
  shortCode: string;
  fullCode: string;
  label: string;
  localizedLabel: string;
}

/***********************************
 * 
 *             Website
 * 
 ***********************************/

export interface WebsiteAttributes {
  name: string;
  favicon?: Relation<MediaAttributes>;
  locales?: RelationMany<LocaleTypeAttributes>;
  defaultLocale: Relation<LocaleTypeAttributes>;
  domain: string;
  seo: SeoAttributes;
  type: 'artist' | 'label';
  artist: Relation<ArtistAttributes>;
  pageHome: Relation<PageHomeAttributes>;
}

/***********************************
 * 
 *            Pages
 * 
 ***********************************/

export interface PageHomeAttributes extends DynamicPageSharedAttributes {
  title: string;
  website?: Relation<WebsiteAttributes>;
}

export interface BioAttributes extends DynamicPageSharedAttributes {
  title: string;
  artist: Relation<ArtistAttributes>;
}

export interface Page404Attributes extends SinglePageSharedAttributes {
  title: string;
  message: string;
}

export interface Page500Attributes extends SinglePageSharedAttributes {
  title: string;
  message: string;
}


/***********************************
 * 
 *             Project
 * 
 ***********************************/

export interface PageProjectAttributes extends DynamicPageSharedAttributes {
  name: string;
  public: boolean;
  slug: string;
  password: string;
  localizations: {
    data: Array<{
      id: number; 
      attributes: {
        name: string;
        public: boolean;
        slug: string;
        locale: string;
    }}>;
  }
}

export interface ProjectAttributes extends DynamicPageSharedAttributes {
  name: string;
  public: boolean;
  slug: string;
  password: string;
  localizations: {
    data: Array<{
      id: number; 
      attributes: {
        name: string;
        public: boolean;
        slug: string;
        locale: string;
    }}>;
  }
}

/***********************************
 * 
 *             Release
 * 
 ***********************************/

export interface ReleaseAttributes {
  title: string;
  releaseDate: string;
  cover?: Relation<MediaAttributes>;
  tracks?: RelationMany<TrackAttributes>;
  recordType?: Relation<RecordTypeAttributes>;
  artist?: Relation<ArtistAttributes>;
  contributors?: RelationMany<ArtistAttributes>;
  label?: Relation<LabelAttributes>;
}

/***********************************
 * 
 *             Artist
 * 
 ***********************************/

export interface ArtistAttributes {
  name: string;
  picture?: Relation<MediaAttributes>;
  description?: string;
  tracks?: RelationMany<TrackAttributes>;
  releases?: RelationMany<ReleaseAttributes>;
  contributions?: RelationMany<TrackAttributes>;
  presence?: RelationMany<ReleaseAttributes>;
  bio?: Relation<BioAttributes>;
  website?: Relation<WebsiteAttributes>;
  projects?: RelationMany<ProjectAttributes>;
}

/***********************************
 * 
 *             Track
 * 
 ***********************************/

 export interface TrackAttributes {
  title: string;
  releaseDate: string;
  bpm: number;
  duration: number;
  release?: Relation<ReleaseAttributes>;
  releasePosition?: number;
  artist?: Relation<ArtistAttributes>;
  genres?: RelationMany<GenreAttributes>;
  contributors?: RelationMany<ArtistAttributes>;
  file?: Relation<MediaAttributes>;
}

/***********************************
 * 
 *             Genre
 * 
 ***********************************/

export interface GenreAttributes {
  name: string;
  tracks?: RelationMany<TrackAttributes>;
}

/***********************************
 * 
 *             RecordType
 *        e.g Album, EP, single
 * 
 ***********************************/

 export interface RecordTypeAttributes {
  name: string;
}

/***********************************
 * 
 *             Label
 * 
 ***********************************/
export interface LabelAttributes {
  name: string;
  releases?: RelationMany<ReleaseAttributes>;
}

/***********************************
 * 
 *             Components
 * 
 ***********************************/

export interface SeoAttributes {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalURL: string;
  metaImage: Relation<MediaAttributes>;
  noIndex?: boolean;
  metaViewport?: string;
}


/***********************************
 * 
 *             Blocks
 * 
 ***********************************/

export interface BlockBaseAttributes {
  __component?: string;
  id: string;
}

export interface BlockParagraphAttributes extends BlockBaseAttributes {
  __component?: 'blocks.paragraph';
  title?: string;
  body: string;
}


export interface BlockReleaseAttributes extends BlockBaseAttributes {
  __component?: 'blocks.release';
  title?: string;
  body: string;
}

export interface BlockTrackAttributes extends BlockBaseAttributes {
  __component?: 'blocks.track';
  track: Relation<TrackAttributes> ;
}

export type Blocks = BlockParagraphAttributes | BlockReleaseAttributes | BlockTrackAttributes;




/***********************************
 * 
 *             Partials
 * 
 ***********************************/
 export interface SinglePageResponse<T> {
  data: {
    id: number;
    attributes: T;
    locale: string;
  }
}

export interface SinglePageSharedAttributes {
  locale: string;
  seo: SeoAttributes;
  blocks?: Array<Blocks>;
}

export interface DynamicPageSharedAttributes {
  locale: string;
  slug: string;
  seo?: SeoAttributes | null;
  blocks?: Array<Blocks>;
  localizations: {
    data: Array<{
      id: number; 
      attributes: {
        slug: string;
        locale: string;
    }}>;
  }
}

 export interface CollectionGetResponse<T> {
  data: {
    id: number;
    attributes: T;
  }
}

export interface Relation<T> {
  data: {
    id: number;
    attributes: T;
  }
}

export interface RelationMany<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>
}


export interface CollectionListResponse<T> {
  data: Array<{id: number; attributes: T}>;
  meta: { pagination: { page: number, pageSize: number, pageCount: number, total: number } }
}



export type PageSharedAttributes = Either<SinglePageSharedAttributes, DynamicPageSharedAttributes>

 export interface MediaAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  // TODO implements formats
}

export interface MediaDataAttributes {
  id: number;
  attributes: MediaAttributes;
}


export interface SingleType<T> {
  data: {
    id: number;
    attributes: T;
  }
}

export type Only<T, U> = {   [P in keyof T]: T[P] } & Omit<{   [P in keyof U]?: never }, keyof T>;
export type Either<T, U> = Only<T, U> | Only<U, T>;