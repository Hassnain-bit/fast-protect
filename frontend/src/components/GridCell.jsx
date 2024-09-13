
function GridCell({ size = 1, children }) {

    const classList = ["fp-comp-grid-cell"];

    return (
        <div className={classList.join(" ")} style={{
            "--grid-cell-span": size
        }}>{children}</div>
    )
}

export default GridCell