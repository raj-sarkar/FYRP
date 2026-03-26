import {
    Typography,
    Box,
    Stack,
    useTheme,
    useMediaQuery,
    Button,
    Alert,
    Snackbar,
} from "@mui/material";
import { UploadCard } from "../component/UploadCard";
import { useState } from "react";

export const Home = () => {

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    const [open, setOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const openSnackbar = (text = "", severity = "success") => {
        setSnackbarMessage(text);
        setSnackbarSeverity(severity);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleFileSubmit = (data) => {
        console.log("File submitted:", data);
        openSnackbar("Successfully analyzed!", "success");
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box sx={{ p: 6, bgcolor: '#161623', minHeight: "100vh" }}>
            {/* Hero Section */}
            <Stack spacing={3} mb={6}>
                <Stack direction="row" spacing={5} width={'100%'} justifyContent='start' alignItems='center'>
                    <Stack spacing={3}>
                        <Typography
                            variant={isDesktop ? "h2" : "h4"}
                            fontWeight="bold"
                            color="primary.main"
                            textAlign={'center'}
                        >
                            AI-Powered Medical Image Diagnosis
                        </Typography>
                        <Typography variant={isDesktop ? "subtitle1" : "body1"} color="grey.300" maxWidth={800}>
                            Detect critical diseases such as brain tumors and pneumonia using advanced deep learning techniques powered by Convolutional Neural Networks (CNN). This system is designed to analyze medical images like brain MRI scans and chest X-rays with high efficiency, assisting in early-stage detection and reducing the chances of delayed diagnosis.
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => scrollToSection("options-section")}
                                sx={{ my: 2 }}
                            >
                                <Typography variant="button" color="white">Get Started</Typography>
                            </Button>
                            <br />
                            By leveraging trained models on medical datasets, the platform provides quick and reliable predictions that can support healthcare professionals and individuals in making informed decisions. Users can upload medical images and optionally include symptoms or notes to provide additional context, improving the relevance of the analysis.
                            <br />
                            <br />
                            The goal of this system is to bridge the gap between AI and healthcare by offering an accessible, intelligent, and user-friendly tool that enhances diagnostic workflows, saves time, and contributes to better patient outcomes.
                        </Typography>
                    </Stack>
                    <img src="/hero.png" alt="Hero Image" hidden={!isDesktop} />
                </Stack>

                {/* Key Points */}
                <Stack spacing={1}>
                    <Typography color="grey.400">
                        • Automated detection using deep learning (CNN)
                    </Typography>
                    <Typography color="grey.400">
                        • Supports Brain MRI & Chest X-ray analysis
                    </Typography>
                    <Typography color="grey.400">
                        • Faster preliminary diagnosis assistance
                    </Typography>
                    <Typography color="grey.400">
                        • Allows symptom notes for better context
                    </Typography>
                </Stack>
            </Stack>

            {/* Options */}
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                alignItems="stretch"
                id="options-section"
            >
                <Box flex={1}>
                    <UploadCard
                        title="Brain Tumor Detection"
                        description="Upload an MRI scan to detect possible brain tumor conditions."
                        handleSubmit={handleFileSubmit}
                    />
                </Box>

                <Box flex={1}>
                    <UploadCard
                        title="Pneumonia Detection (Chest X-ray)"
                        description="Upload a chest X-ray image to check for pneumonia."
                        handleSubmit={handleFileSubmit}
                    />
                </Box>
            </Stack>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert
                    onClose={handleClose}
                    severity={snackbarSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};
