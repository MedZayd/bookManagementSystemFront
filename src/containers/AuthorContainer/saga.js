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
	deleteAuthor,
	fetchAuthors,
	saveAuthor,
	saveAuthorResponse,
	setAuthors,
} from "./authorSlice";

function* fetchAuthorsSaga(action) {
	try {
		yield put(setLoading(true));
		const { data } = yield call(axios.get, endpoints.authors);
		yield put(setAuthors(data));
	} catch (e) {
		yield put(openErrorToast("Error while fetching data !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchFetchAuthorsSaga() {
	yield takeLatest(fetchAuthors.type, fetchAuthorsSaga);
}

function* saveAuthorsSaga(action) {
	try {
		yield put(setLoading(true));
		yield call(axios.post, endpoints.authors, action.payload);
		yield put(saveAuthorResponse(STATUS.SUCCESS));
		yield put(fetchAuthors());
		yield put(openSuccessToast("Author saved successfully !"));
	} catch (e) {
		yield put(saveAuthorResponse(STATUS.ERROR));
		yield put(openErrorToast("Error while saving author !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchSaveAuthorsSaga() {
	yield takeLatest(saveAuthor.type, saveAuthorsSaga);
}

function* deleteAuthorsSaga(action) {
	try {
		yield put(setLoading(true));
		yield call(axios.delete, `${endpoints.authors}/${action.payload}`);
		yield put(saveAuthorResponse(STATUS.SUCCESS));
		yield put(fetchAuthors());
		yield put(openSuccessToast("Author deleted successfully !"));
	} catch (e) {
		yield put(saveAuthorResponse(STATUS.ERROR));
		yield put(openErrorToast("Error while saving author !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchDeleteAuthorsSaga() {
	yield takeLatest(deleteAuthor.type, deleteAuthorsSaga);
}

const authorSagas = [
	watchFetchAuthorsSaga(),
	watchSaveAuthorsSaga(),
	watchDeleteAuthorsSaga(),
];

export default authorSagas;
