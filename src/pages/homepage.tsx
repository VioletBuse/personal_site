import {BaseLayout} from "@/layouts/baselayout.tsx";
import {animated, useSpring, useTrail} from "@react-spring/web";

export const HomePage: React.FC = () => {

	const intro = useSpring({
		config: {mass: 5, tension: 2000, friction: 200},
		from: {opacity: 0, firstNameY: "-23vw", lastNameY: "23vw"},
		to: {opacity: 1, firstNameY: "0vw", lastNameY: "0vw"},
	})

	const devType = useTrail(3, {
		config: {mass: 5, tension: 2000, friction: 200},
		from: {opacity: 0, x: 0, y: -100},
		to: {opacity: 1, x: 0, y: 0},
	})

	return <BaseLayout title="Julian Buse">
		<div className="absolute bottom-0 right-0 p-4 -z-[100] bg-red-300 w-screen h-screen">

		</div>
		<animated.div className="flex overflow-hidden">
			<animated.h1 style={{opacity: intro.opacity, y: intro.firstNameY}}
						 className="font-black tracking-tighter leading-none text-[19.73vw]">Julian
			</animated.h1>
			<animated.h1 style={{opacity: intro.opacity, y: intro.lastNameY}}
						 className="font-black tracking-tighter leading-none text-[19.73vw] ml-[4vw]">Buse
			</animated.h1>
		</animated.div>
		<div className="w-screen flex">
			<div className="w-[58vw] pr-[2vw]">
				<animated.p style={{}}
							className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-light ml-[1vw] text-neutral-200">
					Hi, I'm Julian Buse, a software developer from Germany

				</animated.p>
			</div>
			<div className="w-[44vw] pl-[1vw] border-l-2 border-neutral-500 overflow-hidden">
				<animated.div style={{}}
							  className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold ml-5 text-neutral-300">
					<div className="overflow-hidden">
						<animated.p style={{...devType[0]}}>Websites</animated.p>
					</div>
					<div className="overflow-hidden">
						<animated.p style={{...devType[1]}}>Mobile Apps</animated.p>
					</div>
					<div className="overflow-hidden">
						<animated.p style={{...devType[2]}}>Backend & Server</animated.p>
					</div>
				</animated.div>
			</div>
		</div>
	</BaseLayout>
}
