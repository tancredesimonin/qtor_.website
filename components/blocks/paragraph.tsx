/* eslint-disable react/no-children-prop */
import { BlockParagraphAttributes } from "lib/api/api";
import ReactMarkdown from "react-markdown";

interface BlockParagraphProps {
    block: BlockParagraphAttributes
}

export default function BlockParagraph({ block }: BlockParagraphProps) {
  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto text-lg">
        <ReactMarkdown
          children={block.body}
          className="mt-8 font-sans text-lg leading-8 text-gray-400 "
        />
      </div>
    </div>
  );
}
