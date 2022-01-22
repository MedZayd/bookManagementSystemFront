import moment from "moment";

export const getFormattedDate = (params, key) => {
	const val = params.row[key];
	return val ? `${moment(val).format("MMM Do YY")}` : "";
};

export const convertListToString = (params, key) => {
	return params.row[key].join(", ");
};
