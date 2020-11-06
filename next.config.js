module.exports = {
	exportPathMap: async function () {
		return {
			'/': { page: '/' },
			'/skills': { page: '/skills' },
		};
	},
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
};
