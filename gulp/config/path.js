import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`;
const srcFolder = `./dev`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,gif,webp,WEBP,svg,ico}`,
		scss: `${srcFolder}/styles/**/*.{sass,scss,css}`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		fonts: `${srcFolder}/fonts/**/*.*`
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/styles/**/*.{sass,scss,css}`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,gif,webp,WEBP,svg,ico}`,
		files: `${srcFolder}/files/**/*.*`,
		fonts: `${srcFolder}/fonts/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}