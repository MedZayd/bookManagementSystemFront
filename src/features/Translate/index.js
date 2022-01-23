import { IconWorld } from "@tabler/icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import CIconBtn from "../../ui-components/CIconBtn";
import { setTranslationValue } from "./translationSlice";
import { languages } from "../../utils/constants";

const Translate = () => {
	const [lang, setLang] = useState("en");

	const dispatch = useDispatch();
	const { i18n } = useTranslation();

	const handleOnClick = () => {
		let val = lang;
		if (lang === "en") {
			val = "fr";
			i18n.changeLanguage(languages.FR);
		} else {
			i18n.changeLanguage(languages.EN);
			val = "en";
		}
		setLang(val);
		dispatch(setTranslationValue(val));
	};

	return (
		<CIconBtn type="primary" icon={<IconWorld />} onClick={handleOnClick} />
	);
};

export default Translate;
