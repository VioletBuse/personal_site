import {Route, Switch} from "wouter";
import {NotFoundPage} from "@/pages/notfound.tsx";
import {HomePage} from "@/pages/homepage.tsx";

function App() {
	return (
		<div>
			<Switch>
				<Route path="/"><HomePage/></Route>
				<Route><NotFoundPage/></Route>
			</Switch>
		</div>
	)
}

export default App
