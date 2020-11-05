import Link from 'next/link';
import Image from 'next/image';

function Skill({ title, content, image }) {
	return (
		<div className="container">
			<div style={{ margin: '2em', display: 'flex' }}>
				<div>
					<h3>{title}</h3>
					<p>{content}</p>
				</div>
				<div>
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
	const skills = await fetch('http://localhost:3000/api/skills');
	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time

	const skillsJSON = await skills.json();

	const paths = skillsJSON.map((page) => {
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
	const skill = await fetch(`http://localhost:3000/api/skills/${params.slug}`);
	const { title, content, image } = await skill.json();
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
