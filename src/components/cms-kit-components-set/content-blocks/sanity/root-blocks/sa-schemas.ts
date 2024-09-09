import pageBlock from './PageBlock/sa-schema';
import grid from './Grid/sa-schema';
import blogSection from './BlogSection/sa-schema';
import carouselWithTitle from './CarouselWithTitle/sa-schema';
// HYGEN-IMPORTS-END

export const contentBlocksSchemas = [
  ...pageBlock,
  ...grid,
  ...blogSection,
  ...carouselWithTitle,
  // HYGEN-ARRAY-END
];
