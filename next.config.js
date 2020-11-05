const data = require('./data/skills.json');

const skillPages = [];
data.skills.forEach((page) => {
	skillPages[`/skills/${page.slug}`] = { page: `/skills/${page.slug}` };
});

module.exports = {
	exportPathMap: async function () {
		return {
			'/': { page: '/' },
			'/skills/': { page: '/skills/' },
			...skillPages,
		};
	},
};
