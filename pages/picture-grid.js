import { useRouter } from 'next/router';

export default function PictureGrid ({ ListOfPictures }) {
    console.log(ListOfPictures)
    
    return (
        <p>hi!</p>
    )

}

// API KEYS THRU S3 OR WHATEVER LATER 
PictureGrid.getInitialProps = async () => {

    const response = await fetch('https://api.airtable.com/v0/appzlOCHhf6XKVu1s/Table%201?api_key=keymqbR46BjXHuAgH');
    const ListOfPictures = await response.json();
    return {ListOfPictures: ListOfPictures}

}
