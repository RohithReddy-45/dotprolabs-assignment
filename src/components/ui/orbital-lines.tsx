function OrbitalLines() {
	return (
		<div className="absolute left-1/2 top-1/2 -translate-x-2/3 -translate-y-2/3 w-[800px] h-[800px] -z-10 skew-y-[0deg] skew-x-[45deg] scale-150 -rotate-12">
			<div
				className="absolute inset-0 border-[1px] border-[#484848]/40 rounded-full"
				style={{
					borderColor: 'linear-gradient(90deg, #484848 0%, rgba(72,72,72,0.35) 50%, #484848 100%) 1',
				}}
			/>
			<div
				className="absolute top-[15%] left-[15%] right-[15%] bottom-[15%] border-[1px] border-[#484848]/40 rounded-full"
				style={{
					borderColor: 'linear-gradient(90deg, #484848 0%, rgba(72,72,72,0.35) 50%, #484848 100%) 1',
				}}
			/>
			<div
				className="absolute top-[30%] left-[30%] right-[30%] bottom-[30%] border-[1px] border-[#484848]/40 rounded-full"
				style={{
					borderColor: 'linear-gradient(90deg, #484848 0%, rgba(72,72,72,0.35) 50%, #484848 100%) 1',
				}}
			/>
		</div>
	)
}

export default OrbitalLines
