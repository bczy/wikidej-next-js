// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as skills from '../../data/skills.json';

export default (req, res) => {
	res.statusCode = 200;
	res.json(skills.skills);
};
