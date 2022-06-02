import {useRouter} from "next/router"

import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {Carousel, CardGroup, Card, CardImg, CardBody} from "reactstrap";

export default function Restaurant() {
    const router = useRouter()
    return (
        <h1>Dynamic Restaurant Page {router.query.restaurant}</h1>

    )
}