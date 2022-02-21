import NextImage from "components/medias/image";
import Player from "components/player/player";
import { GenreTag } from "components/tags/genre";
import { BlockTrackAttributes } from "lib/api/api";
import { getReadableDuration } from "lib/calculators";

export default function BlockTrack(block: BlockTrackAttributes) {
  console.log(block.track.data.attributes.genres)
  return (
    <div className="relative">
      <div className="grid max-w-3xl grid-cols-12 py-6 mx-auto sm:py-10">
        {block.track.data.attributes.release?.data.attributes.cover && 
        <div className="col-span-3 md:col-span-3">
          <div className="object-cover object-center rounded-md w-22 h-22 sm:w-48 sm:h-48">
          <NextImage 
          media={block.track.data.attributes.release?.data.attributes.cover.data}
          />
          </div>
        </div>}
        <div className="justify-between col-span-9 ml-4 md:col-span-6 sm:ml-6">
          <div className="">
                <h3 className="text-lg">
                  {/* TODO implements link to /tracks page */}
                  <a href={''} className="font-medium dark:text-gray-300 dark:hover:text-gray-200">
                    {block.track.data.attributes.title}
                  </a>
                </h3>
              <div className="mt-1 text-sm">
                <h4 className="text-base">
                  {/* TODO implements link to /artist page */}
                  <a href={''} className="font-medium dark:text-gray-400 dark:hover:text-gray-300">
                    {block.track.data.attributes.artist?.data.attributes.name}
                  </a>
                </h4>
              </div>
          </div>
          <div>
              {block.track.data.attributes.bpm && <p className="mt-4 text-sm font-medium dark:text-gray-400">{block.track.data.attributes.bpm} BPM</p>}
              {block.track.data.attributes.duration && <p className="mt-4 text-sm font-medium dark:text-gray-400">{getReadableDuration(block.track.data.attributes.duration)}</p>}
              {/* > sm version - hidden on mobile */}
              {block.track.data.attributes.file?.data &&
              <div className="hidden mt-4 sm:block"><Player media={block.track.data.attributes.file.data} /></div>
            }
          </div>
        </div>
        <div className="col-span-3 md:col-span-3">
          {block.track.data.attributes.file?.data &&
              <div className="my-2 sm:hidden"><Player media={block.track.data.attributes.file.data} /></div>
            }
        </div>
        <div className="col-span-12 space-x-2">
          {block.track.data.attributes.genres && block.track.data.attributes.genres.data.map((genre) => (
              <div className="inline-block" key={genre.id}>
                <GenreTag {...genre.attributes}/>
              </div>     
            ))}
        </div>
      </div>
    </div>
  );
}
