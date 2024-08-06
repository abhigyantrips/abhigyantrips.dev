import type { Page, Site, Socials } from "@/types";

// Global
export const SITE: Site = {
	TITLE: 'Abhigyan Trips',
	DESCRIPTION: 'Currently working towards a distraction-free internet.',
	AUTHOR: 'Abhigyan Tripathi'
}

// Projects
export const PROJECTS: Page = {
	TITLE: 'Projects',
	DESCRIPTION: 'A list of projects I\'ve developed, for myself and other organizations.'
}

// Tags
export const TAGS: Page = {
	TITLE: 'Tags',
	DESCRIPTION: 'All blogs, projects and labs categorized by their tags.'
}

// Socials
export const SOCIALS: Socials = [
	{
		NAME: 'GitHub',
		ICON: 'github',
		TEXT: 'abhigyantrips',
		HREF: 'https://github.com/abhigyantrips'
	},
	{
		NAME: "LinkedIn",
		ICON: "linkedin",
		TEXT: 'abhigyantrips',
		HREF: 'https://linkedin.com/in/abhigyantrips'
	}
]
