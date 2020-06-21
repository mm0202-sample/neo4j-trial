import React, { useEffect, useState } from 'react';
import { Elements, Node } from "./packages/@types/App";
import Graph from "./packages/Graph/Graph";
import { getAllPersons } from "./packages/Search/getAllPersons";
import Search from "./packages/Search/Search";

function App() {
    const [elements, setElements] = useState<Elements>({ nodes: [], edges: [] })
    const [persons, setPersons] = useState<Node<any>[] | []>([])

    useEffect(() => {
        (async () => setPersons(await getAllPersons()))()
    }, [])

    return (
        <div style={{ marginTop: '7px', marginLeft: '7px' }}>
            <div>
                <Search persons={persons} handleSearchButtonClick={(elements) => setElements(elements)}/>
            </div>
            <div>
                <Graph elements={elements}/>
            </div>
        </div>
    )
}

export default App;
