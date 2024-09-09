import { TemplateArea, TemplateCategory } from '@focus-reactive/cms-kit-sanity';
import type { SanityTemplate } from '@focus-reactive/cms-kit-sanity/sanity';

import { CarouselWithTitle } from './sa-schema';
import CarouselWithTitleDefaultJSON from './templates/sa-mock-default.json';
import { namespace } from '../../namespace.config';

const CarouselWithTitleDefault: SanityTemplate = {
  name: 'CarouselWithTitle',
  type: CarouselWithTitle.name,
  namespace: namespace.name,
  title: 'Carousel With Title',
  description: 'Starting block for development',
  category: TemplateCategory.pageBlock,
  area: TemplateArea.marketing,
  template: CarouselWithTitleDefaultJSON,
  height: 600 + 4, // 4 is iframe border
};

export default [CarouselWithTitleDefault];
