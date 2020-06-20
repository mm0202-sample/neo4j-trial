import React, { useEffect, useState } from 'react';
import { Elements, Node } from "./packages/@types/App";
import { getAllPersons } from "./packages/Search/getAllPersons";
import Search from "./packages/Search/Search";

function App() {
    const [elements, setElements] = useState<Elements>({ nodes: [], edges: [] })
    const [persons, setPersons] = useState<Node<any>[] | []>([])

    useEffect(() => {
        (async () => setPersons(await getAllPersons()))()
    }, [])

    return (
        <div>
            <div>
                <Search persons={persons} handleSearchButtonClick={(elements) => setElements(elements)}/>
            </div>
            {elements.nodes.length > 0 && <div>
                <hr/>
                <h3>nodes</h3>
                <ul>
                    {elements.nodes.map((node) => <li>{JSON.stringify(node.data)}</li>)}
                </ul>
                <hr/>
                <h3>edges</h3>
                <ul>
                    {elements.edges.map((edge) => <li>{JSON.stringify(edge.data)}</li>)}
                </ul>
            </div>}
        </div>
    )
}

export default App;
