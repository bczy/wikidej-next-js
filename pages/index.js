import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Site démo Next.js</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<h1 className="title">
					Welcome to{' '}
					<Link href="/skills">
						<a>Next.js wikiDéj</a>
					</Link>
				</h1>
			</main>
			<Footer />
			<style global jsx>
				{`
					.main {
						padding: 5rem 0;
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}

					.title a {
						color: #0070f3;
						text-decoration: none;
					}

					.title a:hover,
					.title a:focus,
					.title a:active {
						text-decoration: underline;
					}

					.title {
						margin: 0;
						line-height: 1.15;
						font-size: 4rem;
					}

					.title,
					.description {
						text-align: center;
					}
				`}
			</style>
		</div>
	);
}
