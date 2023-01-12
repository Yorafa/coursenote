import React from 'react';
import { Box, Typography, CardActionArea, CardContent, Card } from '@mui/material';

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Card sx={{ maxWidth: 345 }} onClick={
        () => {
          window.location.href = '/';
        }
      }>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            404 Not Found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The page you are looking for does not exist.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please check the URL and try again.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Click this card to go back to the home page.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </Box>
  );
}