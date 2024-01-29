// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss, scssCompress } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images, imgCompress } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, ttfToWoff2, fontsStyle, copyFonts } from "./gulp/tasks/fonts.js";

// Наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.fonts, copyFonts);
	gulp.watch(path.watch.html, html); //gulp.series(html, ftp)
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// Последовательная обработака шрифтов
const fontsConvert = gulp.series(otfToTtf, gulp.parallel(ttfToWoff, ttfToWoff2), fontsStyle);

// Основные задачи
const mainTasks = gulp.parallel( copyFonts, html, scss, js, images, copy);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

// Экспорт сценариев
export { dev }
export { build }
export { fontsConvert }
export { imgCompress }
export { scssCompress }
export { js }


// Выполнение сценария по умолчанию
gulp.task('default', dev);