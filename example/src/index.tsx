import React from 'react';
import { render } from 'react-dom';
import UrlImageBlurryLazyLoad from '../../src/index';

const App = () => (
  <UrlImageBlurryLazyLoad
    thumbnailImageUrl={'https://i.postimg.cc/2yKZMcHH/thumbnail-IMG-4797-5e394d3c6e.jpg'}
    imageUrl={
      'https://i.postimg.cc/Jhj2KY3m/IMG-4797.jpg'
    }
    imageAlt={''}
  />
);
render(<App />, document.getElementById('root'));