import Link from 'next/link';
import Image from 'next/image';

function Skill({ title, content, image, categories }) {
	return (
		<div className="container">
			<div style={{ width: '50%', margin: '2em', display: 'flex' }}>
				<div>
					<h3>{title}</h3>
					<p>{content}</p>
					<div style={{ color: '#33F' }}>
						[
						{categories?.map(
							(category, i) =>
								`${category}${i < categories.length - 1 ? ' - ' : ''}`
						)}
						]
					</div>
				</div>
				<div>
					<Image width={250} height={250} src={`/images/${image}`} />
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<Link href="/">
					<button>Homepage</button>
				</Link>
				<Link href="/skills">
					<button>Skill List</button>
				</Link>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const data = await require('../../data/skills.json');
	const paths = data.skills.map((page) => {
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
	const data = require('../../data/skills.json');

	const skill = data.skills.find((skill) => skill.slug === params.slug);
	const { title, content, image, categories } = skill;
	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			title,
			content,
			image,
			categories,
		},
	};
}

export default Skill;
