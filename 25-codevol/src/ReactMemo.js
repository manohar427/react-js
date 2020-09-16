import React from 'react'

function ReactMemo({name}) {
    console.log('Render memo component....');
    return (
        <>
            Name1234:{name}
        </>
    )
}
export default React.memo(ReactMemo)
//export default ReactMemo