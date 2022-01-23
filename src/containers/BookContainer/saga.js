import { call, put, takeLatest } from "redux-saga/effects";
import axios from "../../app/api";
import endpoints from "../../endpoints";
import { setLoading } from "../../features/Loader/loaderSlice";
import {
	openErrorToast,
	openSuccessToast,
} from "../../features/Toast/toastSlice";
import { STATUS } from "../../utils/constants";
import {
	deleteBook,
	fetchBooks,
	fetchFormData,
	saveBook,
	saveBookResponse,
	setBooks,
	setFormData,
} from "./bookSlice";

function* fetchBooksSaga(action) {
	try {
		yield put(setLoading(true));
		const { data } = yield call(axios.get, endpoints.books);
		yield put(setBooks(data));
	} catch (e) {
		yield put(openErrorToast("Error while fetching data !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchFetchBooksSaga() {
	yield takeLatest(fetchBooks.type, fetchBooksSaga);
}

function* fetchFormDataSaga(action) {
	try {
		yield put(setLoading(true));
		const { data } = yield call(axios.get, endpoints.formData);
		const formattedData = {
			authors: data.authors.map((auth) => ({
				value: auth.id,
				label: `${auth.firstName} ${auth.lastName}`,
			})),
			categories: data.categories.map((cat) => ({
				value: cat.id,
				label: cat.name,
			})),
			languages: data.languages.map((lang) => ({
				value: lang.id,
				label: lang.name,
			})),
		};
		yield put(setFormData(formattedData));
	} catch (e) {
		yield put(openErrorToast("Error while fetching data !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchFetchFormDataSaga() {
	yield takeLatest(fetchFormData.type, fetchFormDataSaga);
}

function* saveBookSaga(action) {
	try {
		yield put(setLoading(true));
		yield call(axios.post, endpoints.books, action.payload);
		yield put(saveBookResponse(STATUS.SUCCESS));
		yield put(fetchBooks());
		yield put(openSuccessToast("Book saved successfully !"));
	} catch (e) {
		yield put(saveBookResponse(STATUS.ERROR));
		yield put(openErrorToast("Error while saving book !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchSaveBookSaga() {
	yield takeLatest(saveBook.type, saveBookSaga);
}

function* deleteBookSaga(action) {
	try {
		yield put(setLoading(true));
		yield call(axios.delete, `${endpoints.books}/${action.payload}`);
		yield put(saveBookResponse(STATUS.SUCCESS));
		yield put(fetchBooks());
		yield put(openSuccessToast("Book deleted successfully !"));
	} catch (e) {
		yield put(saveBookResponse(STATUS.ERROR));
		yield put(openErrorToast("Error while saving book !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchDeleteBookSaga() {
	yield takeLatest(deleteBook.type, deleteBookSaga);
}

const categorySagas = [
	watchFetchBooksSaga(),
	watchFetchFormDataSaga(),
	watchSaveBookSaga(),
	watchDeleteBookSaga(),
];

export default categorySagas;
