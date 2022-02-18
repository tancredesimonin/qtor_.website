import { PauseIcon, PlayIcon, StopIcon } from "@heroicons/react/outline";
import { BlockTrackAttributes, MediaDataAttributes } from "lib/api/api";
import { getMediaUrl } from "lib/utils";
import { useState } from "react";
import ReactHowler from "react-howler";

export default function Player({ media }: { media: MediaDataAttributes }) {
    const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-lg max-w-prose">
        <ReactHowler src={getMediaUrl(media)} playing={isPlaying} />
        <span className="relative z-0 inline-flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={()=> {setIsPlaying(true)}}
            className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Play
            <PlayIcon className="w-5 h-5 mr-2 -ml-1 text-gray-400" aria-hidden="true"></PlayIcon>
          </button>
          <button
            type="button"
            onClick={()=> {setIsPlaying(false)}}
            className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Pause
            <PauseIcon className="w-5 h-5 mr-2 -ml-1 text-gray-400" aria-hidden="true"></PauseIcon>
          </button>
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Stop
            onClick={()=> {setIsPlaying(false)}}
            <StopIcon className="w-5 h-5 mr-2 -ml-1 text-gray-400" aria-hidden="true"></StopIcon>
          </button>
        </span>
      </div>
    </div>
  );
}
