import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { Main } from "next/document";
import { ThemeProvider } from 'next-themes'

export default function Layout({ children }){
    return (
        <>
            <Head>
                <title>Pia Lee - Frontend Developer</title>
                <meta name="description" content="Python, Javascript, ReactJs, NextJs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Security-Policy" content="
                    default-src 'self' data: gap: *;
                    script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
                    style-src 'self' 'unsafe-inline' 'unsafe-eval' *;
                    media-src 'self' 'unsafe-inline' 'unsafe-eval' *;
                    img-src 'self' 'unsafe-inline' 'unsafe-eval' * data:;"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider>
            <div className="warpper">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
            </ThemeProvider> 
        </>
    );
}