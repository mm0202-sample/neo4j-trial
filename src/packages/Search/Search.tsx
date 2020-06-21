import Autocomplete from "@material-ui/lab/Autocomplete";
import { Elements, Node } from "../@types/App";
import { Button, TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { getElements } from "./getElements";

type Props = {
    persons: Node<any>[] | []
    handleSearchButtonClick: (elements: Elements) => void
}

export default function Search({ persons, handleSearchButtonClick }: Props) {
    const [target, setTarget] = useState<Node<any>>(null)

    const handleTargetChange = (event: ChangeEvent<{}>, newTarget: Node<any>) => setTarget(newTarget)

    return <div>
        <Autocomplete
            id="target"
            value={target}
            onChange={handleTargetChange}
            options={persons}
            getOptionLabel={(person: Node<any>) => person?.properties?.id || ''}
            style={{ width: 300 }}
            renderInput={(params) => (
                <TextField {...params} label="target" variant="outlined"/>
            )}
        />
        <Button onClick={async () => handleSearchButtonClick(await getElements(target))} variant={'outlined'}>
            search
        </Button>
    </div>
}