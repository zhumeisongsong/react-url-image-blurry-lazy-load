import React from 'react';
import { render } from 'react-dom';
import UrlImageBlurryLazyLoad from '../../src/index';

const App = () => (
  <UrlImageBlurryLazyLoad
    thumbnailImageUrl={'https://raw.githubusercontent.com/zhumeisongsong/react-url-image-blurry-lazy-load/main/example/images/thumbnail_IMG_4797_5e394d3c6e.jpeg'}
    imageUrl={
      'https://raw.githubusercontent.com/zhumeisongsong/react-url-image-blurry-lazy-load/main/example/images/IMG_4797.jpeg'
    }
    className={''}
    imageHeight={'66.6%'}
    imageAlt={'text lazy load'}
  />
);
render(<App />, document.getElementById('root'));