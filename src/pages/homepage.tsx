// import {BaseLayout} from "@/layouts/baselayout.tsx";
import {animated, useChain, useInView, useSpring, useSpringRef, useTrail} from "@react-spring/web";
import React, {useState} from "react";
import {useInterval} from "usehooks-ts";
import {ArrowDown, ArrowRight} from "lucide-react";
// import {HomepageBackground} from "@/components/homepagebackground.tsx";

export const HomePage: React.FC = () => {

	const [nameComponentRef, nameInView] = useInView()

	console.log(nameInView)

	const introRef = useSpringRef()
	const intro = useSpring({
		ref: introRef,
		config: {mass: 20, tension: 2000, friction: 200},
		from: {opacity: 0, firstNameY: "-16.8vw", lastNameY: "16.8vw"},
		to: {opacity: 1, firstNameY: "0vw", lastNameY: "0vw"},
	})

	const headerRef = useSpringRef()
	const header = useTrail(3, {
		ref: headerRef,
		config: {mass: 5, tension: 2000, friction: 200},
		from: {opacity: 0, y: -25},
		to: {opacity: 1, y: 0},
	})

	const label = useSpring({
		config: {mass: 5, tension: 2000, friction: 200},
		y: nameInView ? 0 : 100,
		height: nameInView ? "4vw" : "0vw",
		opacity: nameInView ? 1 : 0,
	})

	const secondName = useSpring({
		config: {mass: 5, tension: 2000, friction: 200},
		y: nameInView ? -100 : 0,
		height: nameInView ? "0vw" : "4vw",
		opacity: nameInView ? 0 : 1,
	})

	const introductionRef = useSpringRef()
	const introduction = useSpring({
		ref: introductionRef,
		config: {mass: 5, tension: 2000, friction: 200},
		from: {opacity: 0, y: -200},
		to: {opacity: 1, y: 0},
	})

	useChain([introRef, headerRef, introductionRef], [0, 0.3, 0.7])

	const [germanTime, setGermanTime] = useState("00:00:00")

	useInterval(() => {
		const date = new Date()
		const str = date.toLocaleTimeString("en-UK", {timeZone: "Europe/Berlin"})
		setGermanTime(str)
	}, 1000)

	return <div className="">
		{/*<HomepageBackground/>*/}
		<animated.div ref={nameComponentRef} className="flex overflow-hidden mt-30">
			<animated.h1
				style={{opacity: intro.opacity, y: intro.firstNameY}}
				className="font-black tracking-tighter leading-none text-[17.2vw]">Julian
			</animated.h1>
			<animated.h1
				style={{opacity: intro.opacity, y: intro.lastNameY}}
				className="font-black tracking-tighter leading-none text-[17.2vw] ml-[4vw]">Buse
			</animated.h1>
		</animated.div>
		{/*<div className="flex flex-row sticky top-0">*/}
		{/*	<animated.h1 style={header[0]} className="text-[2vw] ml-[0.5vw] font-thin hidden xl:flex items-center">*/}
		{/*		Freelance Software Development Germany*/}
		{/*	</animated.h1>*/}
		{/*	<animated.h1 style={header[0]} className="text-[3vw] ml-[0.5vw] md:text-3xl font-thin flex xl:hidden items-center">*/}
		{/*		Freelance Software Development*/}
		{/*	</animated.h1>*/}
		{/*	<animated.a style={header[1]}*/}
		{/*				className="text-[3vw] xl:text-[2vw] absolute left-[60.3vw] xl:right-0 font-thin hidden md:flex gap-x-2 hover:gap-x-4 duration-100 items-center cursor-pointer">*/}
		{/*		Contact Me <ArrowDown size={"2vw"}/>*/}
		{/*	</animated.a>*/}
		{/*	<animated.h1 style={header[2]} className="text-[2vw] absolute right-[0.5vw] font-thin hidden 2xl:flex items-center opacity-0 2xl:opacity-100 duration-100">*/}
		{/*		Local Time {germanTime}*/}
		{/*	</animated.h1>*/}
		{/*</div>*/}
		<div className="flex flex-row items-center justify-center sticky top-0 overflow-hidden bg-gradient-to-b from-black via-black via-90% to-transparent">
			<animated.div style={header[0]} className="w-[50vw] xl:w-[40vw]">
				<animated.h1
					style={label}
					className="text-[4vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.3vw] flex items-center gap-x-2">
					Freelance Software <span className="hidden md:inline-block">Development</span> <span className="hidden xl:inline-block">from Germany</span>
				</animated.h1>
				<animated.h1
					style={secondName}
					className="text-[4vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.3vw] flex items-center gap-x-2">
					Julian Buse
				</animated.h1>
			</animated.div>
			<div className="flex flex-row justify-end items-center w-[48vw] xl:w-[58vw]">
				<animated.a style={header[1]}
							className="text-[4vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.3vw] flex flex-row items-center gap-x-2 hover:gap-x-4 duration-100 cursor-pointer">
					Contact Me <ArrowDown/>
				</animated.a>
				<animated.h1 style={header[2]}
							 className="text-[4vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.3vw] hidden lg:flex flex-row items-center gap-x-2 ml-auto">
					Local Time <ArrowRight/> {germanTime}
				</animated.h1>
			</div>
		</div>
		<div className="flex flex-row justify-center items-center overflow-hidden">
			<div className="hidden lg:block w-[50vw] xl:w-[40vw]">

			</div>
			<animated.div
				className="mt-10 px-2 overflow-hidden border-l border-neutral-500 w-full lg:w-[48vw] xl:w-[58vw]">
				<animated.p style={introduction} className="text-2xl md:text-3xl lg:text-4xl font-thin">
					I'm Julian Buse and I'm a software engineer based in Germany. I'm currently working as a freelance
					software developer. I'm specialized in full-stack web development and I'm also experienced in mobile
					app development. I'm always looking for new projects and challenges. If you're interested in working
					with me, feel free to contact me.
				</animated.p>
			</animated.div>
		</div>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
	</div>;
}
