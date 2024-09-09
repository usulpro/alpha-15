'use client';

import type { BlocksMap } from '@focus-reactive/cms-kit-sanity/sanity';
import { findBlockRoot } from '@focus-reactive/cms-kit-sanity/sanity-schema-type-utils';

import { PageBlock } from '../../../ui-layer/PageBlock';
import pageBlock from './PageBlock/sa-schema';
import { CarouselWithTitle } from '../../../ui-layer/CarouselWithTitle';
import carouselWithTitle from './CarouselWithTitle/sa-schema';
// HYGEN-IMPORTS-END

// Declare server component prop for nested renderSanityComponent function
// @ts-ignore
PageBlock.isServerComponent = true;

export const contentBlocksMap: BlocksMap = {
  [findBlockRoot(pageBlock)]: PageBlock,
  [findBlockRoot(carouselWithTitle)]: CarouselWithTitle,
  // HYGEN-ARRAY-END
};
