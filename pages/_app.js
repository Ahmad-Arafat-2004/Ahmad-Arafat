import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

import "@/styles/globals.css";

import { PreLoader } from "@/components/Loader";

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [loading]);

	const title = "Portfolio | Ahmad Arafat";
	const description =
		"Machine Learning Engineer focused on Computer Vision, NLP and real world AI systems deployment";
	const avatar =
		"assets/avatar.jpg";
	const url = "http://localhost:3000/";
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} key="desc" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta property="og:title" content={title} />
				<meta property="og:site_name" content={title}></meta>
				<meta property="og:description" content={description} />
				<meta property="og:image" content={avatar} />
				<meta property="og:image:width" content="612" />
				<meta property="og:image:height" content="612" />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />

				<meta property="twitter:image" content={avatar} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@ahmadarafat" />				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />

				<link rel="canonical" href={url} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="assets\icons\favicon\avtar.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="assets\icons\favicon\avtar.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/avatar.jpg"
				/>
				<link
					rel="manifest"
					href="assets\icons\favicon\avtar.png"
				/>
			</Head>

			<ThemeProvider attribute="class" defaultTheme="dark">
				<Component {...pageProps} loading={loading} />
                <Analytics />
				{loading && <PreLoader />}
			</ThemeProvider>
		</>
	);
}
