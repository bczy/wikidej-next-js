import Link from 'next/link';
import Image from 'next/image';

import Footer from '../../components/Footer';

export default function Skills({ skills }) {
	return (
		<div className="container">
			<p className="description">Some Néo-Soft skills</p>
			<div className="grid">
				{skills.map((skill, i) => (
					<Link key={i} href={`/skills/${skill.slug}`}>
						<a className="card">
							<h3>{skill.title}</h3>
							<p>{`${skill.content.substring(0, 35)}...`}</p>
							<Image src={`/images/${skill.image}`} width={125} height={125} />
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
	const data = require('../../data/skills.json');

	return {
		props: {
			skills: data.skills,
		},
	};
}
