import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import * as React from 'react'
import { useSelector } from 'react-redux'
import  InputLabel  from '@mui/material/InputLabel';
import  Select  from '@mui/material/Select';
import  MenuItem  from '@mui/material/MenuItem';

const SelectComponent = ({ handleChangeCategory, cat }) => {
    const { jobType } = useSelector (state => state.jobTypeAll);
    
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id= 'demo-simple-select-label'>Category</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cat}
                    label="Category"
                    onChange={handleChangeCategory}
                >
                    <MenuItem value = "">All</MenuItem>
                    {
                        jobType && jobType.map(jt => (
                            <MenuItem key = {jt._id} value= {jt._id}>{jt.jobTypeName}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    )
} 
export default SelectComponent;