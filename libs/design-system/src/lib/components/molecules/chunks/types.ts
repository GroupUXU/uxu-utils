import { FC, ReactElement } from 'react';
import { ContentPartTypeEnum } from './enums';
import type { CodeChunk, EmbedChunk, EmbedYouTubeChunk, GalleryChunk, HeaderChunk, IMGChunk, ListChunk, ParagraphChunk, QuoteChunk, TableChunk } from './components/contents';

export type ParseContentPartToChunkProps = {
  contentParts: ContentPartPropsType[];
  children: ({ chunkComponents }: { chunkComponents: ChunkComponentWithPropsInObject[] }) => null | ReactElement | ReactElement[];
};

export type ComponentParseContentPartToChunkType = FC<ParseContentPartToChunkProps>;

export type ContentPartPropsType = {
  id: string;
  type?: ContentPartTypeEnum;
  value?: string;
  url?: string;
  src?: string;
  caption?: string;
  alternativeText?: string;
};

export type ChunkComponent = TableChunk | QuoteChunk | ParagraphChunk | ListChunk | IMGChunk | HeaderChunk | GalleryChunk | EmbedChunk | CodeChunk | EmbedYouTubeChunk;

export type ChunkComponentWithPropsInObject = {
  props: ContentPartPropsType;
  ChunkComponent: ChunkComponent;
};
