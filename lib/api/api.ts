/***********************************
 * 
 *             Global
 * 
 ***********************************/

export interface GlobalAttributes {
  websiteTitle: string;
  locale: string;
  seo: SeoAttributes;
}

export interface SettingsI18nAttributes {
  id: number;
  name: string;
  code: string;
  isDefault: boolean;
}



/***********************************
 * 
 *             Pages
 * 
 ***********************************/


/**
 * Shared
 */
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
  blocks?: Array<BlockParagraphAttributes>;
}

export interface DynamicPageSharedAttributes {
  locale: string;
  slug: string;
  seo?: SeoAttributes | null;
  blocks?: Array<BlockParagraphAttributes | BlockReleaseAttributes>;
  localizations: {
    data: Array<{
      id: number; 
      attributes: {
        slug: string;
        locale: string;
    }}>;
  }
}

export type PageSharedAttributes = Either<SinglePageSharedAttributes, DynamicPageSharedAttributes>

/***********************************
 * 
 *            Single Types
 * 
 ***********************************/

export interface PageHomeAttributes extends SinglePageSharedAttributes {
  h1: string;
}

export interface PageBioAttributes extends SinglePageSharedAttributes {
  h1: string;
}

export interface Page404Attributes extends SinglePageSharedAttributes {
  h1: string;
  message: string;
}

export interface Page500Attributes extends SinglePageSharedAttributes {
  h1: string;
  message: string;
}

/***********************************
 * 
 *             Collections
 * 
 ***********************************/

 export interface CollectionGetResponse<T> {
  data: {
    id: number;
    attributes: T;
  }
}


export interface CollectionListResponse<T> {
  data: Array<{id: number; attributes: T}>;
  meta: { pagination: { page: number, pageSize: number, pageCount: number, total: number } }
}

/***********************************
 * 
 *             Project
 * 
 ***********************************/

export interface ProjectAttributes extends DynamicPageSharedAttributes {
  name: string;
  public: boolean;
  slug: string;
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
  cover?: {
    data?: MediaDataAttributes;
  };
  tracks?: Array<TrackAttributes>;
  recordType?: RecordTypeAttributes;
  artist?: ArtistAttributes;
  contributors?: Array<ArtistAttributes>;
  label?: LabelAttributes;
}

/***********************************
 * 
 *             Artist
 * 
 ***********************************/

export interface ArtistAttributes {
  name: string;
  picture?: {
    data?: MediaDataAttributes;
  };
  description?: string;
  tracks?: Array<TrackAttributes>;
  releases?: Array<ReleaseAttributes>;
  contributions?: Array<TrackAttributes>;
  presence?: Array<ReleaseAttributes>;
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
  release?: ReleaseAttributes;
  releasePosition?: number;
  cover?: {
    data?: MediaDataAttributes;
  };
  artist?: ArtistAttributes;
  genres?: Array<GenreAttributes>;
  contributors?: Array<ArtistAttributes>;
}

/***********************************
 * 
 *             Genre
 * 
 ***********************************/

export interface GenreAttributes {
  name: string;
  tracks?: Array<TrackAttributes>;
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
  releases?: Array<ReleaseAttributes>;
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
  metaImage: {
    data: MediaDataAttributes;
  }
  noIndex?: boolean;
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




/***********************************
 * 
 *             Partials
 * 
 ***********************************/

 export interface MediaDataAttributes {
  id: number;
  attributes: {
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
}


export interface SingleType<T> {
  data: {
    id: number;
    attributes: T;
  }
}

export type Only<T, U> = {   [P in keyof T]: T[P] } & Omit<{   [P in keyof U]?: never }, keyof T>;
export type Either<T, U> = Only<T, U> | Only<U, T>;