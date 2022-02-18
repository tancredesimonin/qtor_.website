import Player from "components/player/player";
import { BlockTrackAttributes } from "lib/api/api";
import { getMediaUrl } from "lib/utils";
import ReactHowler from 'react-howler';

export default function BlockTrack( block: BlockTrackAttributes) {
  console.log(block.track)
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-lg max-w-prose">
        <Player media={block.track.data.attributes.file?.data!}/>
      </div>
    </div>
  );
}