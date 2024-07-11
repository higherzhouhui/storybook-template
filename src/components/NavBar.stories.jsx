
import NavBar from './NavBar';

export default {
  component: NavBar,
  title: 'NavBar',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    props: {
      theme: 'light',
      id: '1'
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


