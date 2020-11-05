// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as data from '../../../data/skills.json';

export default (req, res) => {
	const {
		query: { slug },
	} = req;
	const skill = data.skills.find((skill) => skill.slug === slug);
	res.statusCode = 200;
	res.json(skill);
};
