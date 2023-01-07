import { Box, Button, Checkbox, Input, InputLabel } from '@mui/material'
import React from 'react'

export default function TestMuiComponent() {
    return (
        <Box>
            <Button variant="outlinedSizeLarge" color="text">Test button</Button>
            <Checkbox />
            <InputLabel>Type something</InputLabel>
            <Input />
        </Box>
    )
}
