import * as React from 'react';
import ImgList from '../../components/imageList';
import FilmList from '../../components/filmList';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';


export default function HomePage() {
  return (
    <SimpleReactLightbox>
        <SRLWrapper>
          {/* <ImgList /> */}
          <FilmList />
        </SRLWrapper>
    </SimpleReactLightbox>
                  
  );
}

