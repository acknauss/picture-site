import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react'


export default function AboutPicture({ record }) {
    console.log(record)

    const router = useRouter();

    
    
    return (
    <p>hello!</p>)
    
};


AboutPicture.getInitialProps = async () => {

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keymqbR46BjXHuAgH'}).base('appzlOCHhf6XKVu1s');

    base('Table 1').find('recgbigKpJNzudHpk', function(err, record) {
        if (err) { console.log(err); return; }
        console.log('Retrieved', record.id);
    });

    return {record: 'hey!'};
    
}



