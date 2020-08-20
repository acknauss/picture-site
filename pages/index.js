import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'



export default function Home({ ListOfPictures}) {
  console.log(ListOfPictures)

  return (
    <div className={styles.container}>
      <Head>
        <title>John's Pictures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>John Knauss Photography</h1>
        <div className={styles.mainGrid}>
          {ListOfPictures.records.map( (r, i) => {
          console.log(r.fields.Attachments);
          const attachments = (r.fields.Attachments) ? Object.values(r.fields.Attachments)[0]['thumbnails']['full']['url'] : 'undefined';
          return <div key={r.id} className={styles.mainBlock}>
              <Link href="/lib/[picture]" as={`/lib/${i}`}>
                  <img src={attachments} />
              </Link>
            
          </div>
        })}

        </div>
      </main>

    </div>
  )
}


Home.getInitialProps = async () => {

  const response = await fetch('https://api.airtable.com/v0/appzlOCHhf6XKVu1s/Table%201?api_key=keymqbR46BjXHuAgH');
  const ListOfPictures = await response.json();
  return {ListOfPictures: ListOfPictures}

}
