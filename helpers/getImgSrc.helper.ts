export default function (filename?: string, directory?: string): string | null {
	if (!filename) return null;

	// убираем возможные начальные/конечные слеши у directory
	const dir = directory ? directory.replace(/^\/|\/$/g, '') : null;

	// единый литеральный (рекурсивный) паттерн — разрешён сборщиком
	const modules = import.meta.glob('/assets/imgs/**/*.{png,jpg,jpeg,svg,webp}', {
		eager: true,
		as: 'url',
	});

	// ищем подходящий путь: если directory указан — проверяем, что файл лежит внутри него,
	// иначе — только по имени файла (последняя часть пути)
	const entry = Object.entries(modules).find(([path]) => {
		if (dir) {
			return path.includes(`/assets/imgs/${dir}/`) && path.endsWith(`/${filename}`);
		}
		return path.endsWith(`/${filename}`);
	});

	return entry ? (entry[1] as string) : null;
}
