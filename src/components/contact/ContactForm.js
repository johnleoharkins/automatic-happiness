import React from "react";
import {Button, FormControl, styled, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {ContactActions} from "../../store/contact-slice";
import Grid2 from "@mui/material/Unstable_Grid2";
import SendIcon from "@mui/icons-material/Send";
import classes from './ContactForm.module.css'


const StyledFormControl = styled(FormControl)(({theme}) => {
    return ({
        'padding': '0.8rem'
    })
})

const ContactForm = () => {
    const {name, email, message} = useSelector(state => state.contact);
    const dispatch = useDispatch();

    const handleEmailChanges = (value) => {
        dispatch(ContactActions.emailUpdated(value))
    }
    const handleNameChanges = (value) => {
        dispatch(ContactActions.nameUpdated(value))
    }
    const handleMessageChanges = (value) => {
        dispatch(ContactActions.messageUpdated(value))
    }
    const handleSubmitContact = async (event) => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('name', name);
        formData.append('msgBody', message);

        const jsonString = JSON.stringify({email, name, message})
        console.log("contact, json string ", jsonString)

        const res = await fetch("http://localhost:8082/api/v1/mail/sendContactMail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonString,
            mode: 'cors',
            cache: 'no-cache',
            referrerPolicy: 'no-referrer'})
        if (!res.ok){
            console.log("failed to sendContactMail... ", res.statusMessage)
            return;
        }
        console.log("sendContactMail response... ", res.json())
        handleNameChanges("")
        handleMessageChanges("")
        handleEmailChanges("")
    }

    return (
        <Grid2 md={4}>
            <form id={'contact-form'} className={classes.contactForm}>
                {/*<Grid2>*/}
                    <StyledFormControl>
                        <TextField id={"email"} label={"Your Email"} variant={"outlined"} value={email} onChange={(event) => handleEmailChanges(event.target.value)} />
                    </StyledFormControl>
                {/*</Grid2>*/}

                {/*<Grid2>*/}
                    <StyledFormControl>
                        <TextField id={"name"} label={"Your Name"} variant={"outlined"} value={name} onChange={(event) => handleNameChanges(event.target.value)} />
                    </StyledFormControl>
                {/*</Grid2>*/}

                {/*<Grid2>*/}
                    <StyledFormControl>
                        <TextField id={"message"} label={"Message"} variant={"outlined"} multiline rows={6} value={message} onChange={(event) => handleMessageChanges(event.target.value)} />
                    </StyledFormControl>
                {/*</Grid2>*/}
                <StyledFormControl>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmitContact}>
                        Send
                    </Button>
                </StyledFormControl>
            </form>
        </Grid2>
    )
}

export default ContactForm;