import {
  BlockPreview,
  customRichText,
  imageWithMetadata,
} from '@focus-reactive/cms-kit-sanity/sanity';
import { defineBlockType } from '../../sa-config';
import { blockOptions } from '../../ContentComponents/Section';

export const CarouselWithTitle = defineBlockType(({ df }) => ({
  name: 'CarouselWithTitle',
  type: 'object',
  title: 'Carousel with Title',
  fields: [
    df({
      name: 'title',
      type: 'string',
    }),
    df({
      name: 'description',
      type: customRichText.name,
    }),
    df({
      name: 'images',
      type: 'array',
      of: [{ type: imageWithMetadata.name }],
    }),
    df({
      name: 'backgroundColor',
      type: 'string',
    }),
    df({
      name: 'blockOptions',
      type: blockOptions.name,
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      customTitle: 'title',
      components: 'components',
      blockOptions: 'blockOptions',
    },
    // @ts-ignore
    prepare({ components, blockOptions, customTitle }) {
      return {
        title: customTitle || 'Carousel with Title',
        customTitle,
        components,
        blockOptions,
      };
    },
  },
}));

export default [CarouselWithTitle];
