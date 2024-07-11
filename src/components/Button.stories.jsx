
import { fn } from "@storybook/test";

import Button from './Button';

export const ActionsData = {
  onClick: fn(),
  children: 'Button'
};

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    props: {
      id: '1',
      size: 'medium',
      variant: 'default',
      theme: 'light',
    },
  },
};

export const Mini = {
  args: {
    props: {
      ...Default.args.props,
      size: 'mini',
    },
  },
};

export const Large = {
  args: {
    props: {
      ...Default.args.props,
      size: 'large',
    },
  },
};

export const OutLine = {
  args: {
    props: {
      ...Default.args.props,
      variant: 'outline',
    },
  },
};

export const IconText = {
  args: {
    props: {
      ...Default.args.props,
      variant: 'text',
      afterIcon: <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14 chevron" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg>
    },
  },
};

export const IconTextDark = {
  args: {
    props: {
      ...Default.args.props,
      variant: 'text',
      theme: 'dark',
      afterIcon: <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14 chevron" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg>
    },
  },
};


export const Dark = {
  args: {
    props: {
      ...Default.args.props,
      theme: 'dark',
    },
  },
};
