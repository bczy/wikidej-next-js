import Link from 'next/link';
import Image from 'next/image';

import Footer from '../../components/Footer';

export default function Skills() {
	const skills = [
		{
			title: 'Conseil & Gestion de projet',
			slug: 'conseil-gestion-projet',
			content:
				'Nous vous accompagnons dans l’expression de vos besoins, la rédaction des cahiers des charges, l’analyse de faisabilité, la définition des solutions techniques, le chiffrage de vos projets et leur mise en œuvre.',
			categories: ['DÉFINIR', 'PILOTER', 'ACCOMPAGNER'],
			image: 'Conseil_et_gestions.png',
		},
		{
			title: 'Domaine Applicatif',
			slug: 'domaine-applicatif',
			content:
				"Nous intervenons sur tous les métiers d'études et développement, de la conception au déploiement, en passant par le pilotage MOE, le développement logiciel et la recette applicative.",
			categories: ['DÉVELOPPER', 'TESTER', 'PÉRENNISER'],
			image: 'domaine_applicatif.png',
		},
		{
			title: 'Systèmes & Réseaux',
			slug: 'ststemes-reseaux',
			content:
				"Nous réalisons l’architecture, l’implémentation, le déploiement et le support des infrastructures de vos Systèmes d'Information.",
			categories: ['AUTOMATISER', 'DÉPLOYER', 'SUPERVISER'],
			image: 'infrastructure_et_reseaux.png',
		},
		{
			title: 'Cybersécurité',
			slug: 'cybersecurite',
			content:
				'Notre filiale Cogital, experte en Cybersécurité, réalise des prestations d’audit, de conseil, d’intégration de solutions en partenariat avec les éditeurs, de tests d’intrusion et vous accompagne sur la sécurité opérationnelle de vos SI.',
			categories: ['SENSIBILISER', 'SÉCURISER', 'CONTRÔLER'],
			image: 'Cybersecurite.png',
		},
		{
			title: 'Data',
			slug: 'data',
			content:
				'Ensemble nous donnons du sens à vos données. De la data gouvernance à la datavisualisation, nous vous accompagnons sur la valorisation de votre patrimoine informatif.',
			categories: ['BI', 'BIG DATA', 'IA'],
			image: 'Picto_Data.png',
		},
	];

	return (
		<div className="container">
			<p className="description">Some Néo-Soft skills</p>
			<div className="grid">
				{skills.map((skill, i) => (
					<div className="card">
						<h3>{skill.title}</h3>
						<p>{`${skill.content.substring(0, 35)}...`}</p>
						<Image src={`/images/${skill.image}`} width={125} height={125} />
					</div>
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
