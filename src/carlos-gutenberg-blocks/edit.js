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
    { label: "1:1 (Square)", value: "1:1" },
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
        floatDuration = 8,
        cycleDuration = 3,
        floatDelay = 1,
        slideUpDuration =0.8,
        slideOutDuration = 0.8,
        spacing = 20,
        automaticSizing = false,
    } = attributes;

    const onSelectImages = (newImages) => {
        setAttributes({
            images: newImages.map((img) => ({ id: img.id, url: img.url })),
        });
    };

    // Calculo las proporciones del aspect ratio
    const [width, height] = aspectRatio.split(':').map(Number);

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Images Settings", "carlos-gutenberg-blocks")}>
                    <ToggleControl
                        label={__("Automatic Sizing", "carlos-gutenberg-blocks")}
                        checked={automaticSizing}
                        onChange={() => setAttributes({ automaticSizing: !automaticSizing })}
                        help={__("Adjust boxes to fit parent container", "carlos-gutenberg-blocks")}
                        __nextHasNoMarginBottom
                    />
                    {!automaticSizing && (
                        <>
                            <RangeControl
                                label={__("Desktop Size (vw)", "carlos-gutenberg-blocks")}
                                value={boxSize}
                                onChange={(value) => setAttributes({ boxSize: value })}
                                min={10}
                                max={90}
                                initialPosition={30}
                                __nextHasNoMarginBottom
                            />
                            <RangeControl
                                label={__("Mobile Size (vw)", "carlos-gutenberg-blocks")}
                                value={mobileBoxSize}
                                onChange={(value) => setAttributes({ mobileBoxSize: value })}
                                min={30}
                                max={100}
                                initialPosition={80}
                                __nextHasNoMarginBottom
                            />
                        </>
                    )}
                    <SelectControl
                        label={__("Aspect Ratio", "carlos-gutenberg-blocks")}
                        value={aspectRatio}
                        options={ASPECT_RATIOS}
                        onChange={(value) => setAttributes({ aspectRatio: value })}
                        __nextHasNoMarginBottom
                    />
                    <RangeControl
                        label={__("Box Spacing (px)", "carlos-gutenberg-blocks")}
                        value={spacing}
                        onChange={(value) => setAttributes({ spacing: value })}
                        min={10}
                        max={50}
                        initialPosition={20}
                        help={__("Space between floating boxes", "carlos-gutenberg-blocks")}
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

                <PanelBody
                    title={__("Animation Timing Settings", "carlos-gutenberg-blocks")}
                >
                    <RangeControl
                        label={__("Total Float Duration (seconds)", "carlos-gutenberg-blocks")}
                        value={floatDuration}
                        onChange={(value) => setAttributes({ floatDuration: value })}
                        min={5}
                        max={30}
                        initialPosition={8}
                        help={__("How long the boxes will float before sliding out", "carlos-gutenberg-blocks")}
                        __nextHasNoMarginBottom
                    />
                    <RangeControl
                        label={__("Float Cycle Speed (seconds)", "carlos-gutenberg-blocks")}
                        value={cycleDuration}
                        onChange={(value) => setAttributes({ cycleDuration: value })}
                        min={1}
                        max={10}
                        initialPosition={3}
                        help={__("Duration of each float up/down cycle", "carlos-gutenberg-blocks")}
                        __nextHasNoMarginBottom
                    />
                    <RangeControl
                        label={__("Initial Delay (seconds)", "carlos-gutenberg-blocks")}
                        value={floatDelay}
                        onChange={(value) => setAttributes({ floatDelay: value })}
                        min={0}
                        max={5}
                        initialPosition={2}
                        help={__("Delay before floating starts", "carlos-gutenberg-blocks")}
                        __nextHasNoMarginBottom
                    />
                    <RangeControl
                        label={__("Slide In Duration (seconds)", "carlos-gutenberg-blocks")}
                        value={slideUpDuration}
                        onChange={(value) => setAttributes({ slideUpDuration: value })}
                        min={0.5}
                        max={3}
                        step={0.1}
                        initialPosition={0.8}
                        help={__("How fast the boxes slide in", "carlos-gutenberg-blocks")}
                        __nextHasNoMarginBottom
                    />
                    <RangeControl
                        label={__("Slide Out Duration (seconds)", "carlos-gutenberg-blocks")}
                        value={slideOutDuration}
                        onChange={(value) => setAttributes({ slideOutDuration: value })}
                        min={0.5}
                        max={3}
                        step={0.1}
                        initialPosition={0.8}
                        help={__("How fast the boxes slide out", "carlos-gutenberg-blocks")}
                        __nextHasNoMarginBottom
                    />
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps()}>
    <div className="cgb-floating-boxes-editor">
        {images.length === 0 ? (
            <div className="cgb-empty-state">
                <p>{__("Please add images to make this block work.", "carlos-gutenberg-blocks")}</p>
                <MediaUpload
                    onSelect={onSelectImages}
                    allowedTypes={["image"]}
                    multiple
                    gallery
                    value={images.map((image) => image.id)}
                    render={({ open }) => (
                        <Button 
                            onClick={open} 
                            variant="primary"
                            className="cgb-add-images-button"
                        >
                            {__("Add Images", "carlos-gutenberg-blocks")}
                        </Button>
                    )}
                />
            </div>
        ) : (
            <div
                className={`cgb-group ${automaticSizing ? 'automatic-sizing' : ''}`}
                style={{
                    "--aspect-ratio": aspectRatio.replace(":", "/"),
                    "--aspect-ratio-width": width,
                    "--aspect-ratio-height": height,
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
                        <div key={index} className={className}>
                            <img src={image.url} alt={`Imagen ${index + 1}`} />
                        </div>
                    );
                })}
            </div>
        )}
    </div>
</div>
        </>
    );
}