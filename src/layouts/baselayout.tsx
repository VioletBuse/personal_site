import React from "react";
import {Helmet} from "react-helmet";

interface BaselayoutProps {
	children: React.ReactNode;
	title: string;
}

export const BaseLayout: React.FC<BaselayoutProps> = ({children, title}) => {
	return <div className="">
		<Helmet>
			<title>{title}</title>
		</Helmet>
		{children}
	</div>
}
