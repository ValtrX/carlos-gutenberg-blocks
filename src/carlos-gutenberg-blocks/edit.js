// edit.js
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	ToggleControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";

const ASPECT_RATIOS = [
	{ label: "9:16 (Vertical)", value: "9:16" },
	{ label: "1:1 (Cuadrado)", value: "1:1" },
	{ label: "4:3 (Horizontal)", value: "4:3" },
	{ label: "4:5 (Vertical)", value: "4:5" },
];

export default function Edit({ attributes, setAttributes }) {
	const {
		images = [],
		alignRight,
		boxSize = 30,
		mobileBoxSize = 80,
		aspectRatio = "1:1",
	} = attributes;

	const onSelectImages = (newImages) => {
		setAttributes({
			images: newImages.map((img) => ({ id: img.id, url: img.url })),
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Images", "carlos-gutenberg-blocks")}>
					<SelectControl
						label={__("Aspect Ratio (Frontend)", "carlos-gutenberg-blocks")}
						value={aspectRatio}
						options={ASPECT_RATIOS}
						onChange={(value) => setAttributes({ aspectRatio: value })}
						__nextHasNoMarginBottom
					/>
					<RangeControl
						label={__("Desktop Size (Frontend)", "carlos-gutenberg-blocks")}
						value={boxSize}
						onChange={(value) => setAttributes({ boxSize: value })}
						min={10}
						max={90}
						initialPosition={30}
						__nextHasNoMarginBottom
					/>
					<RangeControl
						label={__("Mobile Size (Frontend)", "carlos-gutenberg-blocks")}
						value={mobileBoxSize}
						onChange={(value) => setAttributes({ mobileBoxSize: value })}
						min={30}
						max={100}
						initialPosition={80}
						__nextHasNoMarginBottom
					/>
					<ToggleControl
						label={__("Align Right", "carlos-gutenberg-blocks")}
						checked={alignRight}
						onChange={() => setAttributes({ alignRight: !alignRight })}
						__nextHasNoMarginBottom
					/>
					<MediaUpload
						onSelect={onSelectImages}
						allowedTypes={["image"]}
						multiple
						gallery
						value={images.map((image) => image.id)}
						render={({ open }) => (
							<Button onClick={open} variant="primary">
								{images.length > 0
									? __("Change Images", "carlos-gutenberg-blocks")
									: __("Select Images", "carlos-gutenberg-blocks")}
							</Button>
						)}
					/>
					<div className="image-preview-panel">
						{images.map((image, index) => (
							<img
								key={index}
								src={image.url}
								alt={`Imagen ${index + 1}`}
								style={{
									width: "50px",
									height: "50px",
									marginRight: "5px",
									marginTop: "5px",
									border: "1px solid #ccc",
									objectFit: "cover",
								}}
							/>
						))}
					</div>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="cgb-floating-boxes-editor-preview">
					<div
						className="cgb-group"
						style={{
							aspectRatio: aspectRatio.replace(":", "/"), // Convertimos "16:9" a "16/9"
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
								<div key={index} className={className}>
									<img src={image.url} alt={`Imagen ${index + 1}`} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
