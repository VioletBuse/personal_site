import {Route, Switch} from "wouter";
import {NotFoundPage} from "@/pages/notfound.tsx";
import {HomePage} from "@/pages/homepage.tsx";

function App() {
	return (
		<div className="min-h-[100dvh] bg-black text-neutral-200">
			<Switch>
				<Route path="/"><HomePage/></Route>
				<Route><NotFoundPage/></Route>
			</Switch>
		</div>
	)
}

export default App
