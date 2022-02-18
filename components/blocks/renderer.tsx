import { Blocks } from "lib/api/api"
import React from "react"
import BlockParagraph from "./paragraph"
import BlockRelease from "./release"
import BlockTrack from "./track"

interface BlockRendererProps {
    blocks?: Array<Blocks>
}

export default function BlockRenderer({blocks}: BlockRendererProps ) {
  return (
    <>
      {blocks?.map((block) => {
        switch (block.__component) {
          case 'blocks.paragraph':
            return <BlockParagraph {...block} key={block.id} />
          case 'blocks.release':
            return <BlockRelease {...block} key={block.id} />
            case 'blocks.track':
              return <BlockTrack {...block} key={block.id} />
          default:
            null
        }
      })}
    </>
  )
}