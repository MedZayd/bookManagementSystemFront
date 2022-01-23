import {
	IconWriting,
	IconBook2,
	IconDashboard,
	IconLanguage,
} from "@tabler/icons";

const menuItems = [
	{
		id: "dashboard",
		title: "Dashboard",
		type: "item",
		url: "/",
		icon: IconDashboard,
		breadcrumbs: false,
	},
	{
		id: "author",
		title: "Authors",
		type: "item",
		url: "/authors",
		icon: IconWriting,
		breadcrumbs: false,
	},
	{
		id: "category",
		title: "Categories",
		type: "item",
		url: "/categories",
		icon: IconWriting,
		breadcrumbs: false,
	},
	{
		id: "book",
		title: "Books",
		type: "item",
		url: "/books",
		icon: IconBook2,
		breadcrumbs: false,
	},
	{
		id: "language",
		title: "Languages",
		type: "item",
		url: "/languages",
		icon: IconLanguage,
		breadcrumbs: false,
	},
];

export default menuItems;
