import { getCmsKey, AdapterFn } from '@focus-reactive/cms-kit-sanity';

type SaProps = {
  _type: string;
  _id: string;
  title: string;
  description: object;
  images: object[];
  backgroundColor: string;
  blockOptions: object;
};

export const sa: AdapterFn = (cmsProps: SaProps) => {
  return {
    key: getCmsKey(cmsProps),
    ...cmsProps,
  };
};
