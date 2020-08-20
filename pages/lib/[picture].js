import { useRouter } from 'next/router';
import Link from 'next/link';
import Carousel from 'nuka-carousel';
import styles from './PictureSlider.module.css';
import { useState, useEffect } from 'react'

export default function PicturePage({ListOfPictures}) {

    const router = useRouter();
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {setActiveId(parseInt(router.query.picture))}, [])
    
    useEffect(() => {
        console.log(activeId)
        if(activeId || activeId === 0) {
            router.replace(
                '/lib/[picture]',
                `/lib/${activeId}/`
              );
           
        } 
    }, [activeId])
    
    
    return (
    <div className={styles.bigParent}>
        <Link href="/"><a>back</a></Link>
            <div className={styles.bigSlideContainer}>
                <Carousel
                    wrapAround={true}
                    slidesToShow={1}
                    slideIndex={activeId}
                    easing='easeSinInOut'
                    afterSlide={slideIndex => {setActiveId(slideIndex);}}
                >

                    {ListOfPictures.records.map( r => {
                        const attachments = (r.fields.Attachments) ? Object.values(r.fields.Attachments)[0]['url'] : 'undefined';
                        return <div key={r.id} className={styles.pictureParent}>
                            <img src={attachments} />
                            <Link href="/lib/about/[about]" as={`/lib/about/${r.id}`}>
                                <a className={styles.pictureLearnMore}>Learn More</a>
                            </Link>
                        </div>
                    })}
                </Carousel>
            </div>

    </div>)
    
};



PicturePage.getInitialProps = async () => {

    const response = await fetch('https://api.airtable.com/v0/appzlOCHhf6XKVu1s/Table%201?api_key=keymqbR46BjXHuAgH');
    const ListOfPictures = await response.json();
  
    return {ListOfPictures: ListOfPictures}
  
  }
