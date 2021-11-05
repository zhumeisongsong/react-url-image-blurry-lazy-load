import React, { useState, useCallback, useMemo, FC } from 'react';

const layout: any = {
  container: {
    backgroundColor: '#f6f6f6',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.2s ease-in-out',
  },
  img: {
    position: 'absolute',
    opacity: 0,
    top: 0,
    left: 0,
    width: '100%',
    transition: 'opacity 1s linear',
  },
  imgSmall: {
    filter: 'blur(50px)',
    /* this is needed so Safari keeps sharp edges */
    transform: 'scale(1)',
  },
};

type Props = {
  imageUrl: string;
  thumbnailImageUrl: string;
  imageAlt: string;
  className?: string;
  imageHeight?: string;
};

const UrlImageBlurryLazyLoad: FC<Props> = ({
  imageUrl,
  thumbnailImageUrl,
  imageAlt,
  className,
  imageHeight,
}: Props) => {
  const [state, setState] = useState({
    smallImageLoaded: false,
    largeImageLoaded: false,
  });
  const onSmallImageLoad = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      smallImageLoaded: true,
    }));
  }, []);
  const onLargeImageLoad = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      largeImageLoaded: true,
    }));
  }, []);

  return useMemo(
    () => (
      <React.StrictMode>
        <div style={{ ...layout.container }} className={className}>
          <img
            style={{
              ...layout.img,
              ...layout.imgSmall,
              opacity: state?.smallImageLoaded ? 1 : 0,
            }}
            src={thumbnailImageUrl}
            onLoad={onSmallImageLoad}
            alt={imageAlt}
          />
          <div style={{ paddingBottom: imageHeight }} />
          <img
            style={{ ...layout.img, opacity: state?.largeImageLoaded ? 1 : 0 }}
            src={imageUrl}
            onLoad={onLargeImageLoad}
            alt={imageAlt}
          />
        </div>
      </React.StrictMode>
    ),
    [imageUrl, thumbnailImageUrl, imageAlt, imageHeight, state]
  );
};

UrlImageBlurryLazyLoad.defaultProps = {
  imageUrl: '',
  thumbnailImageUrl: '',
  imageAlt: '',
  className: '',
  imageHeight: '66.6%',
};

export default UrlImageBlurryLazyLoad;
