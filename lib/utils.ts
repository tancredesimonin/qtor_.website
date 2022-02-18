import { MediaDataAttributes } from "./api/api";

export function getMediaUrl(media: MediaDataAttributes) : string {    
      // Return the full URL if the media is hosted on an external provider
      if (media.attributes.url.startsWith("/uploads")) {
        return `${process.env.NEXT_PUBLIC_CDN_URL}${media.attributes.url}`
      }
    return `${process.env.NEXT_PUBLIC_CDN_URL}/${media.attributes.hash}${media.attributes.ext}`
}