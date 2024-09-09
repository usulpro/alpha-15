import React from 'react';
import { withCMS } from '@focus-reactive/cms-kit-sanity';
import { ContentBlockGeneric } from '@focus-reactive/cms-kit-sanity/sanity';
import { GenericRichText } from '@focus-reactive/cms-kit-sanity/common';
import { SmartImage } from '../../ContentComponents/SmartImage';
import { Section, SectionProps } from '../../ContentComponents/Section';

type Props = ContentBlockGeneric & {
  title: string;
  description: object;
  images: object[];
  backgroundColor: string;
  blockOptions: SectionProps;
};

const defaultImage = {};

function CarouselWithTitle(props: Props) {
  const { title, description, images, backgroundColor, blockOptions } = props;
  return (
    <Section
      backgroundOptions={blockOptions.backgroundOptions}
      layoutOptions={blockOptions.layoutOptions}
    >
      <h3
        className={`text-3xl pb-6 bg-[${backgroundColor}]`}
      >{`CarouselWithTitle: ${title}`}</h3>
      <GenericRichText value={description} />
      {images && images.length > 0 && (
        <div className="carousel">
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <SmartImage imageWithMetadata={image || defaultImage} />
            </div>
          ))}
        </div>
      )}
      <details className="my-10">
        <summary>Click to view the props</summary>
        <pre className="text-sm">
          <code>{JSON.stringify(props, null, 2)}</code>
        </pre>
      </details>
    </Section>
  );
}

export default withCMS({ sa })(CarouselWithTitle);
