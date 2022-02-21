import { DownloadIcon, PauseIcon, PlayIcon } from "@heroicons/react/outline";
import { MediaDataAttributes } from "lib/api/api";
import { getMediaUrl } from "lib/utils";
import { useState } from "react";
import ReactHowler from "react-howler";

export default function Player({ media }: { media: MediaDataAttributes }) {
  console.log(media.attributes)
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-lg max-w-prose"> */}
      <ReactHowler src={getMediaUrl(media)} playing={isPlaying} />
      <span className="relative z-0 inline-flex rounded-md shadow-sm">
      <a
            type="button"
            download
            href={getMediaUrl(media)}
            className="inline-flex items-center text-gray-300 border border-transparent rounded-full shadow-sm hover:text-gray-400"
          >
            <DownloadIcon
              className="w-10 h-10"
              aria-hidden="true"
            ></DownloadIcon>
          </a>
        {isPlaying ? (
          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
            }}
            className="inline-flex items-center text-gray-300 border border-transparent rounded-full shadow-sm hover:text-gray-400"
          >
            <PauseIcon
              className="w-10 h-10"
              aria-hidden="true"
            ></PauseIcon>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsPlaying(true);
            }}
            className="inline-flex items-center text-gray-300 border border-transparent rounded-full shadow-sm hover:text-gray-400"
          >
            <PlayIcon
              className="w-10 h-10"
              aria-hidden="true"
            ></PlayIcon>
          </button>
        )}
      </span>
      {/* </div>
    </div> */}
    </>
  );
}
