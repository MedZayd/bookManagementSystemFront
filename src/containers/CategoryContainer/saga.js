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
	deleteCategory,
	fetchCatgories,
	saveCategoryResponse,
	saveCategory,
	setCategories,
	fetchParentCategories,
	setOptions,
} from "./categorySlice";

function* fetchCategoriesSaga(action) {
	try {
		yield put(setLoading(true));
		const { data } = yield call(axios.get, endpoints.categories);
		yield put(setCategories(data));
	} catch (e) {
		yield put(openErrorToast("Error while fetching data !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchFetchCategoriesSaga() {
	yield takeLatest(fetchCatgories.type, fetchCategoriesSaga);
}

function* fetchParentCategoriesSaga(action) {
	try {
		yield put(setLoading(true));
		const { data } = yield call(axios.get, endpoints.parentCategories);
		const formatToOptions = data.map((cat) => ({
			value: cat.id,
			label: cat.name,
		}));
		yield put(setOptions(formatToOptions));
	} catch (e) {
		yield put(openErrorToast("Error while fetching data !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchFetchParentCategoriesSaga() {
	yield takeLatest(fetchParentCategories.type, fetchParentCategoriesSaga);
}

function* saveCategorySaga(action) {
	try {
		yield put(setLoading(true));
		yield call(axios.post, endpoints.categories, action.payload);
		yield put(saveCategoryResponse(STATUS.SUCCESS));
		yield put(fetchCatgories());
		yield put(openSuccessToast("Category saved successfully !"));
	} catch (e) {
		yield put(saveCategoryResponse(STATUS.ERROR));
		yield put(openErrorToast("Error while saving category !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchSaveCategorySaga() {
	yield takeLatest(saveCategory.type, saveCategorySaga);
}

function* deleteCategorySaga(action) {
	try {
		yield put(setLoading(true));
		yield call(axios.delete, `${endpoints.categories}/${action.payload}`);
		yield put(saveCategoryResponse(STATUS.SUCCESS));
		yield put(fetchCatgories());
		yield put(openSuccessToast("Category deleted successfully !"));
	} catch (e) {
		yield put(saveCategoryResponse(STATUS.ERROR));
		yield put(openErrorToast("Error while saving category !"));
	} finally {
		yield put(setLoading(false));
	}
}

function* watchDeleteCategorySaga() {
	yield takeLatest(deleteCategory.type, deleteCategorySaga);
}

const categorySagas = [
	watchFetchCategoriesSaga(),
	watchFetchParentCategoriesSaga(),
	watchSaveCategorySaga(),
	watchDeleteCategorySaga(),
];

export default categorySagas;
