import { ReactNode } from 'react';

export type inspireType = {
  icon: ReactNode;
  title: string;
  paragraph: string;
};

export type serviceType = {
  title: string;
  description: string;
  imageUrl: string;
};

type social = {
  instagram: string;
  facebook: string;
};

export type teamType = {
  imageUrl: string;
  name: string;
  social: social;
};
