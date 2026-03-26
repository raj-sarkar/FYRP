import { useState } from "react";
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    TextField,
    Box,
} from "@mui/material";

export const UploadCard = ({ title, description, handleSubmit }) => {
    const [file, setFile] = useState(null);
    const [note, setNote] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <Card sx={{ borderRadius: 4, boxShadow: 3, p: 2, bgcolor: "#1e1e2f" }}>
            <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom color="grey.300">
                    {title}
                </Typography>
                <Typography variant="body2" color="grey.400" mb={2}>
                    {description}
                </Typography>

                <Box mb={2}>
                    <Button variant="contained" component="label">
                        Upload Image
                        <input type="file" hidden onChange={handleFileChange} accept="image/*" />
                    </Button>
                    {file && (
                        <Typography variant="caption" display="block" mt={1} color="grey.400">
                            {file.name}
                        </Typography>
                    )}
                </Box>

                <TextField
                    label="Describe symptoms (optional)"
                    multiline
                    rows={3}
                    fullWidth
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    sx={
                        {
                            label: { color: "grey.400" },
                            ["& .MuiInputBase-root"]: {
                                color: "grey.300",
                                outlineColor: "grey.400",
                            },
                            ["& .MuiOutlinedInput-notchedOutline"]: {
                                borderColor: "grey.400",
                            },
                        }
                    }
                />
            </CardContent>

            <CardActions>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: 3 }}
                    onClick={handleSubmit}
                >
                    Analyze
                </Button>
            </CardActions>
        </Card>
    );
};
