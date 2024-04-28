import { isEmpty, isArray } from 'lodash';
import {useState, useRef} from 'react';

const GalleryCarousel = ({gallery}) => {

    if ( isEmpty(gallery) || ! isArray( gallery ) ) {
        return null;
    }

    const activeIndexRef = useRef( { activeIndex: 0 } );
    const slideRef = useRef( 0 );
    const [ slide, setSlide ] = useState( 0 );
    const [ restartSlide, setRestartSlide ] = useState( 0 );
    const { activeIndex } = activeIndexRef.current;

    /**
     * Change to next slide.
     */
    const nextSlide = () => {

        if ( 1 === gallery.length ) {
            return null;
        }

        /**
         * If if autoplay is set to true
         * and all slides are finished playing,
         * set the activeIndex to one and restart the slide from start.
         */
        if ( activeIndexRef.current.activeIndex === gallery.length - 1 ) {

            activeIndexRef.current.activeIndex = 0;
            setRestartSlide( restartSlide + 1 );

        } else {

            // If its not the last slide increment active index by one.
            activeIndexRef.current.activeIndex =
                activeIndexRef.current.activeIndex + 1;

        }

        slideRef.current = slideRef.current + 1;
        setSlide( slideRef.current );

    };

    return (
        <div className="banner flex flex-col sm:flex-row justify-between overflow-hidden ">
            <div className="banner-img w-full relative sm:h-gallerysm h-galleryxsm">
                {
                    gallery.map( ( item, index ) => {
                        const opacity = ( activeIndex === index || 1 === gallery.length ) ? 'opacity-100' : 'opacity-0';
                        return (
                            <div key={item?.id} className={`${opacity} banner-img-container absolute top-0 left-0`}>
                                <img className='img-gallery'
                              objectPosition="center center" fill={true} objectFit={'cover'}
                                height={1000}
                              
                                     src={item?.mediaItemUrl} 
                                     loading="lazy" 
                                     alt={ item?.altText ? item?.altText : item?.title }
                                   
                                  
                                />
                            </div>
                        )
                    })
                }
                <div className='slider-content'>
                <div className="slider-buttons ">
                    <button className="focus:outline-none button-sliders" onClick={nextSlide}>
                        <svg width="25px" className="inline-block " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                    </button>
                    <button className="focus:outline-none button-sliders" onClick={nextSlide}>
                        <svg width="25px" className="inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default GalleryCarousel