import { useState, useRef, useEffect } from "react";
import "./grid.scss";

function Grid({ gutter = 20, maxColumns = 4, minColumnWidth = 1100 / maxColumns, children }) {
    
    const classList = ["fp-comp-grid"];
    const gridRef = useRef();
    const [gridWidth, setGridWidth] = useState(0);
    const [gridColumns, setGridColumns] = useState(1);

    // on first render
    // set grid ResizeObserver
    // it sets gridWidth each time the element changes width 
    useEffect(() => {
        new ResizeObserver(() => { setGridWidth(gridRef.current.offsetWidth) }).observe(gridRef.current)
    }, [])

    // on setGridWidth
    // calculate best columns
    // then setGridcolumns to its value
    useEffect(() => {
        const bestColumns = Math.floor(gridWidth / minColumnWidth);
        setGridColumns(bestColumns);
    }, [gridWidth, gutter, minColumnWidth, maxColumns])

    return (
        <div ref={gridRef} className={classList.join(" ")} style={{
            "--grid-gutter": `${gutter}px`,
            "--grid-columns": `${gridColumns}`
        }}>{children}</div>
    )
}

export default Grid