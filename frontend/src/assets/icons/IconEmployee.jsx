import React from 'react'

function IconEmployee() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
        >
            <rect width={16} height={16} fill="url(#pattern0_4123_326)" />
            <defs>
                <pattern
                    id="pattern0_4123_326"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use xlinkHref="#image0_4123_326" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_4123_326"
                    width={100}
                    height={100}
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    )
}

export default IconEmployee
