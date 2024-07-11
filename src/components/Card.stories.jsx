import Card from './Card';

export default {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    props: {
      href: '/forBrands',
      title: 'For Brands',
      content: 'Discover, engage, and collaborate with top creators',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGVSURBVHgB7ZdRTsJAEIZnVmJ8XG/ADeQG9gg8EmMingAuABZ58FE9gSUxhEe5AdyEG7jPKjtOWxrbZutLk84+7JfQ2WE26Z8/mdktQKAdWE7042gMoK5BFLs3801SZL1yCVG9gThqzI+kyHquLURwDx2DCBMOA6Q/cSlOgWa+TqBD9NOoDz/qOV1baxflmgIf+IaIn5qI9ibeHMolLwQi4kO+oLheExeYTw7sA8HBzDa7el1cIE+OtDlYHyxcdVGBOr6NOAwy9xoaU9bBs+M4DYR21bRFTGA6WhDwLkuO1dlXRs7BLzXNItltfbSUkROo1Ee+wKt/t4EQZva+43DgNu7r5Shq2ifaJGjh1BynQe1AVKCl8xcOhpslanJRVKCJE8MuvuYZTlx7xE+Sk4t8c8ahjoe6XhcXmLrIJ8k2S/BiWq97cZshVLmLSk3qLnohMB85yD/QdRedN+rL5Q1B5+Sv5LthevzFxb9+3KgrVD403Q5+ztYInuChg1WCwLYEgW0JAtsSBLbFe4GVo44srSAQ6JZf5O5nBLvI/DMAAAAASUVORK5CYII='
    },
  },
};
