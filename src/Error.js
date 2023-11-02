import React from "react";
import { useSearchParams } from "react-router-dom";

import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Error() {
    let [searchParams,] = useSearchParams();

    const code = searchParams.get('code');
    const message = searchParams.get('message');

    return (
        <Box sx={{ p: 20 }}>
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography color="danger" level='h5' sx={{ mb: 1.5 }}>Something went wrong!</Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            error code: {code}
                        </Typography>
                        <Typography variant="body2">
                            error message: {message}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => { window.location.href = "/" }}>Go Back</Button>
                    </CardActions>
                </Card>
            </Container>
        </Box>
    )
}

export default Error;
