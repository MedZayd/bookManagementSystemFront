import { all } from "redux-saga/effects";
import authorSagas from "../containers/AuthorContainer/saga";
import categorySagas from "../containers/CategoryContainer/saga";
import bookSagas from "../containers/BookContainer/saga";
import langSagas from "../containers/LangContainer/saga";

export default function* rootSaga() {
	yield all([...authorSagas, ...categorySagas, ...bookSagas, ...langSagas]);
}
