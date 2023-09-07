import {BaseLayout} from "@/layouts/baselayout.tsx";
import {animated, useSpring} from "@react-spring/web";

export const HomePage: React.FC = () => {

	const intro = useSpring({
		from: {firstNameY: "-23vw", lastNameY: "23vw"},
		to: {firstNameY: "0vw", lastNameY: "0vw"},
	})

	const webdev = useSpring({
		from: {x: 400},
		to: {x: 0},
	});

	const appdev = useSpring({
		from: {x: 400},
		to: {x: 0},
		delay: 500
	});

	const backenddev = useSpring({
		from: {x: 400},
		to: {x: 0},
		delay: 1000
	});

	return <BaseLayout title="Julian Buse">
		<animated.div className="flex overflow-hidden">
			<animated.h1 style={{y: intro.firstNameY}}
						 className="font-normal tracking-tighter leading-none text-[23vw]">Julian
			</animated.h1>
			<animated.h1 style={{y: intro.lastNameY}}
						 className="font-normal tracking-tighter leading-none text-[23vw] ml-[4vw]">Buse
			</animated.h1>
		</animated.div>
		<div className="w-screen flex">
			<div className="w-[55vw] pr-[2vw]">
				<animated.p style={{}}
							className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-light ml-5 text-neutral-300">
					Hi, I'm Julian Buse, a software developer from Germany

				</animated.p>
			</div>
			<div className="w-[44vw] pl-[1vw] border-l-2 border-neutral-50">
				<animated.p style={{}}
							className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-light ml-5 text-neutral-300">
					<animated.span style={{x: webdev.x}}>Websites</animated.span>
					<br/>
					<animated.span style={{x: appdev.x}}>Mobile Apps</animated.span>
					<br/>
					<animated.span style={{x: backenddev.x}}>Backend & Server</animated.span>
					<br/>
				</animated.p>
			</div>

		</div>
	</BaseLayout>
}
