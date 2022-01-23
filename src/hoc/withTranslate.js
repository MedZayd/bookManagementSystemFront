import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const withTranslate =
	(Component) =>
	({ ...props }) => {
		const { t } = useTranslation("common");
		return (
			<Suspense fallback="loading">
				<Component t={t} {...props} />
			</Suspense>
		);
	};

export default withTranslate;
