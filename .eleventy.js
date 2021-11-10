module.exports = (config) => {
	config.addPassthroughCopy('src/assets');
	config.addWatchTarget("./src/styles/scss/");

	return {
		dir: { input: 'src', output: 'dist', includes: '_includes' },
		templateFormats: ['njk', 'md', 'css'],
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true
	}
}