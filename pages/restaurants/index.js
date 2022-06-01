import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Home.module.css';
import utilStyles from '../../styles/utils.module.css';
import Layout, {siteTitle} from '../../components/layout'

// do 'npm run dev' to start program

export default function Home() {
    const restaurants = [
        {name:"WoodsHill"},
        {name:"McDonalds"},
        {name:"Wendys"}
    ]
  return (
    <div>
        <h1>Restaurant List</h1>
        {
            restaurants.map((item,idx)=> {
            return (
                <div key={idx}>
                    <Link as={"/restaurants/"+item.name} href={"restaurants/[restaurant]"}>
                        <a>{item.name}</a>
                    </Link>
                </div>
            )})
        }
    </div>)
    
}