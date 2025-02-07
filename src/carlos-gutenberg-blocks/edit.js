import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import { PanelBody, Button, ToggleControl } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { images = [], alignRight } = attributes;

	const onSelectImages = (newImages) => {
		setAttributes({
			images: newImages.map((img) => ({ id: img.id, url: img.url })),
		});
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Images", "carlos-gutenberg-blocks")}>
				<ToggleControl
						label={__("Align Right", "carlos-gutenberg-blocks")}
						checked={alignRight}
						onChange={() => setAttributes({ alignRight: !alignRight })}
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
					<div className="cgb-container">
						<div className="cgb-group">
							{images.slice(0, 3).map((image, index) => {
								const baseClassName = "cgb-floating-box";
								const positionClassName =
									index === 1 ? "cgb-second" : index === 2 ? "cgb-third" : "";

								const alignmentClassName = alignRight ? "align-right" : "align-left";

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
			</div>
		</>
	);
}
