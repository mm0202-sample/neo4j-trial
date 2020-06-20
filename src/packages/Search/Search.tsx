import Autocomplete from "@material-ui/lab/Autocomplete";
import { Node } from "../@types/App";
import { TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";

type Props = {
    persons: Node<any>[] | []
}

export default function Search({ persons }: Props) {
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
    </div>
}