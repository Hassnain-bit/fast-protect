function IconPerson() {
    return (
        <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width={20}
  height={20}
  viewBox="0 0 20 20"
  fill="none"
>
  <rect width={20} height={20} fill="url(#pattern0_4122_322)" />
  <defs>
    <pattern
      id="pattern0_4122_322"
      patternContentUnits="objectBoundingBox"
      width={1}
      height={1}
    >
      <use xlinkHref="#image0_4122_322" transform="scale(0.01)" />
    </pattern>
    <image
      id="image0_4122_322"
      width={100}
      height={100}
      xlinkHref="data:image/png;base64,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"
    />
  </defs>
</svg>

    )
}

export default IconPerson
