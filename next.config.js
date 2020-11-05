const siteData = require('./site-data.json');

const skillPages = [];
siteData.pages.forEach((page) => {
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
