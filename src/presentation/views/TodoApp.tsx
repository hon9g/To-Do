import React from "react"

import List from "../components/List"
import Checkbox from "../components/Checkbox"

const App = () => {
    return (
        <>
        <h1>To ~ do ~ !</h1>
        <List>
            {['1', '2', '3', '4'].map(x => <Checkbox label={x} value={x} isChecked={false} />)}
        </List>
        </>
    )
}

export default App
