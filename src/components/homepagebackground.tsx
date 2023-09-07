import React, {useLayoutEffect, useRef} from "react";
import useResizeObserver from "@react-hook/resize-observer";

export const HomepageBackground: React.FC = () => {

	const target = useRef<HTMLDivElement>(null)
	const [size, setSize] = React.useState({width: 0, height: 0})

	useLayoutEffect(() => {
		setSize(target.current?.getBoundingClientRect() ?? {width: 0, height: 0})
	}, [target]);

	useResizeObserver(target, entry => setSize(entry.contentRect))

	const width = size.width
	const height = size.height

	const columns = Math.ceil(width / 35)
	const rows = Math.ceil(height / 35)

	console.log(columns, rows)

	const [[currentX, currentY], setCurrent] = React.useState([0, 0])

	console.log(currentX, currentY)

	return <>
		<div ref={target}
			 className="absolute bottom-0 right-0 -z-[100] w-screen h-screen flex flex-col overflow-hidden">
			{Array.from(Array(rows)).map((_, row) => {
				return <div className="flex flex-row flex-grow" key={row}>
					{Array.from(Array(columns)).map((_, col) => {

						const distanceFromCurrent = Math.sqrt(Math.pow(currentX - col, 2) + Math.pow(currentY - row, 2))
						const quadraticFallOff = 1 / Math.pow(distanceFromCurrent, 4)
						const opacity = Math.min(1, quadraticFallOff)


							return <div style={{opacity}} onMouseEnter={() => {
								setCurrent([col, row])
							}} className="flex-grow bg-neutral-200 rounded" key={col}>
							</div>
						}
					)}
				</div>
			})}
		</div>
	</>
}
