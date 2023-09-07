import React from "react";
import {BaseLayout} from "@/layouts/baselayout.tsx";

export const NotFoundPage: React.FC = () => {
	return <BaseLayout title="Page Not Found">
		<div className="p-4">
			<h1 className="text-2xl font-bold">Error 404</h1>
			<p className="text-lg">Page not found</p>
		</div>
	</BaseLayout>
}
