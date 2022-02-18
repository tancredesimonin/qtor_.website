/* eslint-disable react/no-children-prop */
import { BlockReleaseAttributes } from "lib/api/api";

export default function BlockRelease( block: BlockReleaseAttributes) {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-lg max-w-prose">
        {/* <ReactMarkdown
          children={block.body}
          className="mt-8 font-sans text-lg leading-8 text-gray-400"
        /> */}
      </div>
    </div>
  );
}