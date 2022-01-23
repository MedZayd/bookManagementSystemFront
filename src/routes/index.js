import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthorContainer from "../containers/AuthorContainer";
import BookContainer from "../containers/BookContainer";
import CategoryContainer from "../containers/CategoryContainer";
import DashboardContainer from "../containers/DashboardContainer";
import LangContainer from "../containers/LangContainer";

const index = () => {
	return (
		<Routes>
			<Route path="/authors" element={<AuthorContainer />} />
			<Route path="/categories" element={<CategoryContainer />} />
			<Route path="/books" element={<BookContainer />} />
			<Route path="/languages" element={<LangContainer />} />
			<Route path="/" element={<DashboardContainer />} />
		</Routes>
	);
};

export default index;
