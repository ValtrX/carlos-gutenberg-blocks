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
        floatDuration = 18,
        cycleDuration = 3,
        spacing = 20,
    } = attributes;

    const onSelectImages = (newImages) => {
        setAttributes({
            images: newImages.map((img) => ({ id: img.id, url: img.url })),
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Images Settings", "carlos-gutenberg-blocks")}>
                    <SelectControl
                        label={__("Aspect Ratio", "carlos-gutenberg-blocks")}
                        value={aspectRatio}
                        options={ASPECT_RATIOS}
                        onChange={(value) => setAttributes({ aspectRatio: value })}
                        __nextHasNoMarginBottom
                    />
                    <RangeControl
                        label={__("Desktop Size", "carlos-gutenberg-blocks")}
                        value={boxSize}
                        onChange={(value) => setAttributes({ boxSize: value })}
                        min={10}
                        max={90}
                        initialPosition={30}
                        __nextHasNoMarginBottom
                    />
                    <RangeControl
                        label={__("Mobile Size", "carlos-gutenberg-blocks")}
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

                <PanelBody title={__("Animation Settings", "carlos-gutenberg-blocks")}>
                    <RangeControl
                        label={__("Float Duration (seconds)", "carlos-gutenberg-blocks")}
                        value={floatDuration}
                        onChange={(value) => setAttributes({ floatDuration: value })}
                        min={5}
                        max={30}
                        initialPosition={18}
                        __nextHasNoMarginBottom
                    />
                    <RangeControl
                        label={__("Cycle Duration (seconds)", "carlos-gutenberg-blocks")}
                        value={cycleDuration}
                        onChange={(value) => setAttributes({ cycleDuration: value })}
                        min={1}
                        max={10}
                        initialPosition={3}
                        __nextHasNoMarginBottom
                    />
                    <RangeControl
                        label={__("Spacing (px)", "carlos-gutenberg-blocks")}
                        value={spacing}
                        onChange={(value) => setAttributes({ spacing: value })}
                        min={10}
                        max={50}
                        initialPosition={20}
                        __nextHasNoMarginBottom
                    />
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps()}>
                <div className="cgb-floating-boxes-editor">
                    <div
                        className="cgb-group"
                        style={{
                            aspectRatio: aspectRatio.replace(":", "/"),
                            "--spacing": `${spacing}px`
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
                                >
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