import { Preset } from '@/sanity/plugins/content-blocks';
import pageBlock from './PageBlock/sa-templates';
import blogSection from './BlogSection/sa-templates';
import grid from './Grid/sa-templates';
import carouselWithTitle from './CarouselWithTitle/sa-templates';
// HYGEN-IMPORTS-END

export const contentBlockPresets = [
  ...pageBlock,
  ...blogSection,
  ...grid,
  ...carouselWithTitle,
  // HYGEN-ARRAY-END
].map((t) => ({
  name: t.name,
  value: t.template,
  meta: { ...t, template: undefined },
})) as Preset[];
