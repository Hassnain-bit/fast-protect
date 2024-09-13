function IconDownButton() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
        >
            <rect width={60} height={60} fill="url(#pattern0_2075_326)" />
            <defs>
                <pattern
                    id="pattern0_2075_326"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use xlinkHref="#image0_2075_326" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_2075_326"
                    width={100}
                    height={100}
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>

    )
}

export default IconDownButton
