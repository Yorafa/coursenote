import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <Container maxWidth="xl" style={{
            position: 'fixed',
            left: 'auto',
            bottom: 0,
            width: '100%',
            backgroundcolor: 'red',
            color: 'white',
            textalign: 'center',
        }}>
            <Box
                sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: "flex",
                my:1
                }}
            >
            </Box>
            <Box
                sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: "flex",
                mb: 2,
                }}
            >
                <Typography variant="caption" color="initial">
                    coursenote ©2023. Created by <a href="https://github.yorafa.com">Yorafa</a>
                </Typography>
            </Box>
        </Container>
    );
}
