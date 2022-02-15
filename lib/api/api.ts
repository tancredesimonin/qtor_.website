/***********************************
 * 
 *             Global
 * 
 ***********************************/

export interface GlobalAttributes {
  websiteTitle: string;
  locale: string;
}



/***********************************
 * 
 *             Pages
 * 
 ***********************************/


/**
 * Shared
 */
export interface PageResponse<T> {
  data: {
    id: number;
    attributes: T;
    locale: string;
  }
}

export interface PageSharedAttributes {
  locale: string;
  seo: SeoAttributes;
}

/**
 * Single types
 */
export interface PageHomeAttributes extends PageSharedAttributes {
  h1: string;
}

export interface Page404Attributes extends PageSharedAttributes {
  h1: string;
  message: string;
}

export interface Page500Attributes extends PageSharedAttributes {
  h1: string;
  message: string;
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
  metaImage?: {
    data?: MediaDataAttributes;
  }
  noIndex: boolean;
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

export interface BlockParagraph extends BlockBaseAttributes {
  __component?: 'blocks.paragraph';
  title?: string;
  body?: string;
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