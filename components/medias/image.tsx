import Image from "next/image"
import { getMediaUrl } from "lib/utils"
import { MediaDataAttributes } from "lib/api/api"

interface NextImageProps {
    media: MediaDataAttributes;
    className: string;
}
const NextImage = ({ media, className }: NextImageProps) => {
  const { alternativeText, width, height } = media.attributes;

  return (
    <Image
      width={width}
      height={height}
      src={getMediaUrl(media)}
      alt={alternativeText || ""}
      className={className}
    />
  )
}

export default NextImage