import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

import * as siteData from '../../site-data.json';
import Footer from '../../components/Footer';

export default function FactList() {
	return (
		<div className="container">
			<p className="description">Some Néo-Soft skills</p>
			<div className="grid">
				{siteData.pages.map((page, i) => (
					<Link key={i} href={`/skills/${page.slug}`}>
						<a className="card">
							<h3>{page.title}</h3>
							<p>{`${page.content.substring(0, 35)}...`}</p>
							<Image src={`/images/${page.image}`} width={125} height={125} />
						</a>
					</Link>
				))}
			</div>
			<Footer />
			<style jsx>
				{`
					.description {
						line-height: 1.5;
						font-size: 1.5rem;
					}

					.grid {
						display: flex;
						align-items: center;
						justify-content: center;
						flex-wrap: wrap;
						max-width: 800px;
						margin-top: 3rem;
					}

					.card {
						margin: 1rem;
						flex-basis: 45%;
						padding: 1.5rem;
						text-align: left;
						color: inherit;
						text-decoration: none;
						border: 1px solid #eaeaea;
						border-radius: 10px;
						transition: color 0.15s ease, border-color 0.15s ease;
					}

					.card:hover,
					.card:focus,
					.card:active {
						color: #0070f3;
						border-color: #0070f3;
					}

					.card h3 {
						margin: 0 0 1rem 0;
						font-size: 1.5rem;
					}

					.card p {
						margin: 0;
						font-size: 1rem;
						line-height: 1.5;
					}

					@media (max-width: 600px) {
						.grid {
							width: 100%;
							flex-direction: column;
						}
					}
				`}
			</style>
		</div>
	);
}
