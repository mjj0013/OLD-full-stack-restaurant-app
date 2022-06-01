import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
export default function T() {
    return (
        <Layout>
            <Head>
                <title>Test #1</title>
            </Head>
            <h1>Test 1</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}