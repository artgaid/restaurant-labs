import path from 'node:path';

import { promises as fs } from 'fs';

export default defineEventHandler(async (event) => {
	const q = getQuery(event);
	const rawExpert = (q.expertName as string) || 'default'; // default опционально
	// защита от path traversal: оставляем только безопасные символы
	const expert = rawExpert.replace(/[^a-zA-Z0-9_-]/g, '');

	if (!expert) {
		return createError({ statusCode: 400, statusMessage: 'Invalid expertDir' });
	}

	const basePublic = path.join(process.cwd(), 'public', 'images', 'experts');
	const expertDir = path.join(basePublic, expert);

	// проверяем, существует ли директория
	try {
		const stat = await fs.stat(expertDir);
		if (!stat.isDirectory()) {
			return { main: null, projects: [] };
		}
	} catch {
		return { main: null, projects: [] };
	}

	// main
	const mainFilename = 'main.jpg'; // при необходимости можно подобрать динамически
	const mainFilePath = path.join(expertDir, mainFilename);
	let mainUrl: string | null;

	try {
		await fs.access(mainFilePath);
		mainUrl = `/images/experts/${expert}/${mainFilename}`;
	} catch (err) {
		mainUrl = null;
		console.error(err, 'server.err');
	}

	// projects
	const projectsDir = path.join(expertDir, 'projects');
	let projects: string[];
	try {
		const files = await fs.readdir(projectsDir);
		projects = files
			.filter((f) => /\.(jpe?g|png|webp|gif|avif|svg)$/i.test(f))
			.map((f) => `/images/experts/${expert}/projects/${f}`);
	} catch (err) {
		// если папки нет — оставляем пустой массив
		projects = [];
		console.error(err, 'server.err');
	}

	return { main: mainUrl, projects };
});
