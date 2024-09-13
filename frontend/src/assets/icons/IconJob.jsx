import React from 'react'

function IconJob() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
        >
            <rect width={16} height={16} fill="url(#pattern0_2086_123)" />
            <rect width={16} height={16} fill="url(#pattern1_2086_123)" />
            <defs>
                <pattern
                    id="pattern0_2086_123"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use xlinkHref="#image0_2086_123" transform="scale(0.01)" />
                </pattern>
                <pattern
                    id="pattern1_2086_123"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use xlinkHref="#image0_2086_123" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_2086_123"
                    width={100}
                    height={100}
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>

    )
}

export default IconJob
