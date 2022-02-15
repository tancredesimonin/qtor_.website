import { BlockParagraphAttributes } from "lib/api/api"
import React from "react"
import BlockParagraph from "./paragraph"

interface BlockRendererProps {
    blocks?: Array<BlockParagraphAttributes>
}

export default function BlockRenderer({blocks}: BlockRendererProps ) {
  return (
    <>
      {blocks?.map((block) => {
        switch (block.__component) {
          case 'blocks.paragraph':
            return <BlockParagraph block={block} key={block.id} />
          default:
            null
        }
      })}
    </>
  )
}