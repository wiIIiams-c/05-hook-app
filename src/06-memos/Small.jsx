import { memo } from "react";

export const Small = memo(({value}) => {
    console.log('Me volvi a dibujar xd');
    return (
        <small>{value}</small>
    )
})
