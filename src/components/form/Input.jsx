import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export function Input({
    autocomplete,
    name,
    id,
    label,
    autofocus,
    sm,
    onChange,
    onBlur,
    value,
    error,
    helperText,
    type,
    sx,
    size,
}) {
    return (
        <Grid item xs={12} sm={sm}>
            <TextField
                autoComplete={autocomplete}
                name={name}
                required
                fullWidth
                id={id}
                label={label}
                autoFocus={autofocus}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                size={size}
                error={error}
                helperText={helperText}
                type={type}
                sx={sx}
            />
        </Grid>
    );
}
