import { combineReducers } from "redux";
import loadingReducer from "../features/Loader/loaderSlice";
import drawerReducer from "../features/Drawer/drawerSlice";
import toastReducer from "../features/Toast/toastSlice";
import authorReducer from "../containers/AuthorContainer/authorSlice";
import categoryReducer from "../containers/CategoryContainer/categorySlice";
import bookReducer from "../containers/BookContainer/bookSlice";
import languageReducer from "../containers/LangContainer/langSlice";
import translationReducer from "../features/Translate/translationSlice";

const rootReducer = combineReducers({
	authors: authorReducer,
	categories: categoryReducer,
	books: bookReducer,
	languages: languageReducer,
	loading: loadingReducer,
	drawer: drawerReducer,
	toast: toastReducer,
	translation: translationReducer,
});

export default rootReducer;
