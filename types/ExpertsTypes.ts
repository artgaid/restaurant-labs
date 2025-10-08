export interface ExpertType {
	id: string;
	name: string;
	description: string;
	photoDir: string;
	experience?: { id: string; description: string }[];
	skills?: { id: string; description: string }[];
	achievements?: { id: string; description: string }[];
	projects?: { id: string; description: string }[];
	offers?: { id: string; description: string }[];
}
