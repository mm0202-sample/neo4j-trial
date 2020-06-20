import React, { useEffect, useState } from 'react';
import { Node } from "./packages/@types/App";
import { getAllPersons } from "./packages/Search/getAllPersons";
import Search from "./packages/Search/Search";

function App() {
    const [persons, setPersons] = useState<Node<any>[] | []>([])

    useEffect(() => {
        (async () => setPersons(await getAllPersons()))()
    }, [])

    return (
        <div>
            <div>
                <Search persons={persons}/>
            </div>
        </div>
    )
}

export default App;
