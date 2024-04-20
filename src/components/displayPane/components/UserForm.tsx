import { Divider, Grid, TextField, Typography } from "@mui/material";

const UserFormSignIn = () => {

    return (
        <Grid item md={3}>
        <Typography sx={{ paddingTop: 2 }}>etails.orgName</Typography>
        <Divider sx={{ paddingTop: 1, borderBottomWidth: 3 }} />
        <Typography sx={{ paddingTop: 1 }} color="dimgray">
            Legal entity: legalEntity
        </Typography>
        <TextField id="standard-basic" label="Standard" variant="filled" />
        <Typography sx={{ paddingTop: 1 }} color="dimgray">
            Registration No: registrationNumber
        </Typography>
        <Typography sx={{ paddingTop: 1 }} color="dimgray">
            VAT No: vatNumber
        </Typography>
        <Typography sx={{ paddingTop: 1 }} color="dimgray">
            CAMO ref: camoRef
        </Typography>

        <Typography sx={{ paddingTop: 3 }} variant="subtitle1">
            Contact
        </Typography>
        <Divider sx={{ paddingTop: 1, borderBottomWidth: 3 }} />
        <Typography sx={{ paddingTop: 3 }} color="dimgray">
            Person: contactPerson
        </Typography>
        <Typography sx={{ paddingTop: 1 }} color="dimgray">
            Email: email
        </Typography>
        </Grid>)
}

export default UserFormSignIn;