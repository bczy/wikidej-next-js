import Link from 'next/link';
import Image from 'next/image';

import * as siteData from '../../site-data.json';
import styles from '../../styles/Home.module.css';

function Skill({ title, content, image }) {
	return (
		<div className={styles.container}>
			<div>
				<h3>{title}</h3>
				<div style={{ display: 'flex' }}>
					<p>{content}</p>
					<Image width={500} height={500} src={`/images/${image}`} />
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<Link href="/">
					<button>Homepage</button>
				</Link>
				<Link href="/fact-list">
					<button>Fact List</button>
				</Link>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = siteData.pages.map((page) => {
		return { params: { slug: page.slug } };
	});

	return {
		paths,
		fallback: true,
	};
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const page = siteData.pages.find((page) => page.slug === params.slug);
	const { title, content, image } = page;
	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			title,
			content,
			image,
		},
	};
}

export default Skill;
