import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		images = [],
		alignRight,
		boxSize = 30,
		mobileBoxSize = 80,
		aspectRatio = "1:1",
		floatDuration = 18,
		cycleDuration = 3,
		floatDelay = 2,
		slideUpDuration = 1,
		slideOutDuration = 1,
		spacing = 20,
		automaticSizing = false,
	} = attributes;

	return (
		<div
			{...useBlockProps.save()}
			data-float-duration={floatDuration}
			data-cycle-duration={cycleDuration}
			data-float-delay={floatDelay}
			data-slide-up-duration={slideUpDuration}
			data-slide-out-duration={slideOutDuration}
			data-spacing={spacing}
			data-automatic-sizing={automaticSizing}
		>
			<div className="cgb-floating-boxes-frontend">
				<div
					className={`cgb-group ${automaticSizing ? "automatic-sizing" : ""}`}
					style={{
						...(automaticSizing
							? { width: "100%" }
							: {
									"--box-size": `${boxSize}vw`,
									"--mobile-box-size": `${mobileBoxSize}vw`,
									"--aspect-ratio": aspectRatio.replace(":", "/"),
							  }),
						"--spacing": `${spacing}px`,
						"--float-duration": `${floatDuration}s`,
						"--float-cycle-duration": `${cycleDuration}s`,
						"--float-delay": `${floatDelay}s`,
						"--slide-up-duration": `${slideUpDuration}s`,
						"--slide-out-duration": `${slideOutDuration}s`,
					}}
				>
					{images.slice(0, 3).map((image, index) => {
						const baseClassName = "cgb-floating-box";
						const positionClassName =
							index === 1 ? "cgb-second" : index === 2 ? "cgb-third" : "";
						const alignmentClassName = alignRight
							? "align-right"
							: "align-left";
						const className = `${baseClassName} ${positionClassName} ${alignmentClassName}`;

						return (
							<div
								key={index}
								className={className}
								aria-label={`Floating box ${index + 1}`}
							>
								<img src={image.url} alt={`Imagen ${index + 1}`} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
