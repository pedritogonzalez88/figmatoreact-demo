import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Navbar,
        HeroLayout3,
        MarketingPricing,
        ContactUs,
} from '../ui-components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar/>
      <HeroLayout3/>
      <MarketingPricing/>
      <ContactUs/>
    </div>
  )
}
