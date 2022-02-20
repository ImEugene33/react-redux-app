import React from 'react';
import {Checkbox, FormControlLabel, TextField} from '@mui/material';

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <TextField error
                       size='small'
                       margin="dense"
                       label={hasError && meta.error}
                       {...input} {...props}/>
        </div>
    )
}
export const CustomCheckbox = ({input, meta, ...props}) => {
    const [checked, setChecked] = React.useState(false)
    return (
        <div>
            <FormControlLabel
                control={<Checkbox checked={checked}
                                   onChange={(e) => setChecked(e.target.checked)}
                                   name={'check'}/>}
                label="Remember me"
                {...input} {...props}/>
        </div>
    )
}