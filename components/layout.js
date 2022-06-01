import styles from './layout.module.css'
import Image from 'next/image'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


const name = "Matthew"
export const siteTitle = "Next.js Sample Website"
export default function Layout({children, isHome}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <meta name="description" content="Learn how to build a personal website using Next.js" />
            <header className={styles.header}>
                {isHome? (
                    <>
                        <Image priority src="/images/biden3.jpeg" className={utilStyles.borderCircle} height={144} width={144} alt={name} />
                    </>

                ) : (
                    <>
                        <Image priority src="/images/biden3.jpeg" className={utilStyles.borderCircle} height={108} width={108} alt={name} />
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>


                )}
            </header>
            <main>{children}</main>
            {/* {!isHome && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>Back To Home</a>
                    </Link>    
                </div>
            )} */}
            
        </div>
       
        )
}