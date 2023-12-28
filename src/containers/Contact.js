import React from "react";
import classes from './Contact.module.css'
import Page from "./Page";
import ContactForm from "../components/contact/ContactForm";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
const Contact = () => {
    return (
        <Page>
            <Grid2 container>
                <Grid2 md={12}>
                    <Typography variant={'h4'} align={'center'} >
                        Contact Me
                    </Typography>
                </Grid2>
                <Grid2 md={4}></Grid2>
                <ContactForm />
                <Grid2 md={4}></Grid2>
            </Grid2>

        </Page>
    )
}

export default Contact;