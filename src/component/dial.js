import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

const actions = [
    { icon: <HomeIcon />, name: 'Home', action: () => {window.location.href = '/'}},
    { icon: <ArrowBackIcon />, name: 'Back',action: () => {window.history.back()} },
];

export default function ControlledOpenSpeedDial() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'fixed', bottom: 0, right: 0, zIndex: 'tooltip' }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => {
                            handleClose();
                            action.action();
                        }}
                    />
                ))}
            </SpeedDial>
    );
}