import React, { useEffect, useState } from 'react'
import { Box, TextField, Dialog, Grid, DialogTitle, DialogActions, DialogContent, Button, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { createDish, getDishById, updateDish } from '../service/dish';
import axios from 'axios';

export default function AddDish({ isLoading, modalOpen, dishId, onDialogClose }) {

    const [loading, setLoading] = isLoading();
    const [open, setOpen] = modalOpen();
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const [formData, setFormData] = React.useState({
        title: "",
        image: "",
        description: "",
        category: "",
        price: ""
    })


    const uploadImage = async () => {
        const imageData = new FormData();
        imageData.append('image', file);
        try {
            const res = await axios.post('https://jaspreetcafebackend.onrender.com/api/upload', imageData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return res.data;
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    }


    useEffect(() => {
        (async () => {
            setLoading(!loading)
            const result = await getDishById(dishId);
            if (result.data.status) {
                setFormData(result.data.data)
            }
            setLoading(false)

        })()
    }, [loading])

    const handleChange = async (event) => {
        const { name, value, type } = event.target;
        setFormData((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));

    }


    const handleCreateUser = async (event) => {
        event.preventDefault();
        if (!formData.title) {
            toast.error("Title is required!");
            return;
        }

        if (!formData.description) {
            toast.error("Description is required!");
            return;
        }
        if (!formData.category) {
            toast.error("Category is required!");
            return;
        }
        if (!formData.price) {
            toast.error("Price is required!");
            return;
        }
        const fileData = await uploadImage();
        try {
            setLoading(!loading)
            if (fileData) {
                const res = await createDish({ ...formData, image: fileData.filename });
                if (res.status) {
                    setLoading(true)
                    toast.success("Add Dish Successfully!");
                    setOpen(false);
                    setLoading(false)
                    return
                }
                toast.error(res.message)
            }
            toast.error("Error in image uploading")
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.success("Something went wrong!")

        }
    };

    const handleOpen = () => {
        setLoading(!loading)
        setOpen(true);
        setLoading(false)

    };

    // Close dialog handler
    const handleClose = () => {
        setOpen(false);
        handleClearForm()
        onDialogClose();
    };


    const handleSubmitUpdate = async () => {
        try {
            setLoading(!loading)
            const result = await updateDish(formData);
            if (result.data.status) {
                toast.success(result.data.message)
                setOpen(false)
                setLoading(false)
                return;
            }
            toast.error(result.data.message)
        } catch (error) {

        }
    }

    const handleClearForm = () => {
        setFormData({
            title: "",
            image: "",
            description: "",
            category: "",
            price: ""
        })
    }


    return (
        <div>
            <Button startIcon={<AddIcon />} variant="contained" color="primary" style={{ margin: '10px 0 0 70%' }} onClick={handleOpen}>Create New Dish</Button>
            <Dialog open={open}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <DialogTitle> {dishId ? "Update Dish" : "Create New Dish"}</DialogTitle>
                    {dishId}
                    <IconButton onClick={handleClose}><CloseIcon /> </IconButton>
                </div>
                <DialogContent>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="title"
                                    fullWidth
                                    id="firstName"
                                    label="Title"
                                    autoFocus
                                    onChange={handleChange}
                                    value={formData?.title}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="file"
                                    fullWidth
                                    id="lastName"
                                    label="Image"
                                    name="image"
                                    autoComplete="family-name"
                                    onChange={handleFileChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        accept: 'image/*', // Allow only image files
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Description"
                                    name="description"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={formData.description}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        name='category'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Category"
                                        onChange={handleChange}
                                        value={formData.category}
                                    >
                                        <MenuItem value="breakFast">Break Fast</MenuItem>
                                        <MenuItem value="lunch">Lunch</MenuItem>
                                        <MenuItem value="dinner">Dinner</MenuItem>
                                        <MenuItem value="dessert">Dessert </MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="price"
                                    label="Price"
                                    id="password"
                                    type='number'
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                    value={formData.price}
                                />
                            </Grid>

                        </Grid>

                    </Box>
                </DialogContent>
                <DialogActions>
                    {
                        dishId ? (
                            <Button onClick={handleSubmitUpdate} variant="contained">Update</Button>

                        ) : (

                            <Button onClick={handleCreateUser} variant="contained">Create</Button>
                        )
                    }
                </DialogActions>
            </Dialog>
        </div>
    )
}
