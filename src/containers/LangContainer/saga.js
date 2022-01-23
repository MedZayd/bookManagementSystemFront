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
	deleteLanguage,
	fetchLanguages,
	saveLanguage,
	saveLanguageResponse,
	setLanguages,
} from "./langSlice";

function* fetchAllSaga(action) {
	try {
		yield put(setLoading(true));
		const { data } = yield call(axios.get, endpoints.languages);
		yield put(setLanguages(data));
	} catch (e) {
		yield put(openErrorToast("Error while fetching data !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchFetchAllSaga() {
	yield takeLatest(fetchLanguages.type, fetchAllSaga);
}

function* saveLangSaga(action) {
	try {
		yield put(setLoading(true));
		yield call(axios.post, endpoints.languages, action.payload);
		yield put(saveLanguageResponse(STATUS.SUCCESS));
		yield put(fetchLanguages());
		yield put(openSuccessToast("Language saved successfully !"));
	} catch (e) {
		yield put(saveLanguageResponse(STATUS.ERROR));
		yield put(openErrorToast("Error while saving language !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchSaveLangSaga() {
	yield takeLatest(saveLanguage.type, saveLangSaga);
}

function* deleteLanguageSaga(action) {
	try {
		yield put(setLoading(true));
		yield call(axios.delete, `${endpoints.languages}/${action.payload}`);
		yield put(saveLanguageResponse(STATUS.SUCCESS));
		yield put(fetchLanguages());
		yield put(openSuccessToast("Language deleted successfully !"));
	} catch (e) {
		yield put(saveLanguageResponse(STATUS.ERROR));
		yield put(openErrorToast("Error while saving language !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchDeleteLanguageSaga() {
	yield takeLatest(deleteLanguage.type, deleteLanguageSaga);
}

const authorSagas = [
	watchFetchAllSaga(),
	watchSaveLangSaga(),
	watchDeleteLanguageSaga(),
];

export default authorSagas;
