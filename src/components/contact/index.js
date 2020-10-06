import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, Button, Alert, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { contactUs } from '../../store/actions';

const Contact = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:''
        },
        validationSchema:Yup.object({
            name: Yup.string().required('Sorry the name is required'),
            email: Yup.string()
            .email('Invalid email')
            .required('Sorry the email is required'),
            message: Yup.string()
            .required('Sorry the message is required')
        }),
        onSubmit: ( values, { resetForm } )=>{
            dispatch(contactUs(values)).then((payload)=>{
                resetForm();
                toast('Congrats, we will contact you shortly, not.',{
                    type:toast.TYPE.SUCCESS,
                    position:toast.POSITION.BOTTOM_LEFT
                })
            }).catch((err)=>{
                toast('Sorry, TRY AGAIN LATER',{
                    type:toast.TYPE.ERROR,
                    position:toast.POSITION.TOP_LEFT
                })
            })
        }
    })

    return(
        <Container className="mt-4">
            <h1>Contact us</h1>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="string"
                        name="name"
                        placeholder="Enter your name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    { formik.touched.name && formik.errors.name ?
                        <Alert variant="danger">
                            { formik.errors.name }
                        </Alert>
                    :null}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                     { formik.touched.email && formik.errors.email ?
                        <Alert variant="danger">
                            { formik.errors.email }
                        </Alert>
                    :null}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        name="message"
                        placeholder="Enter your email"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />
                    { formik.touched.message && formik.errors.message ?
                        <Alert variant="danger">
                            { formik.errors.message }
                        </Alert>
                    :null}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <ToastContainer/>

            </Form>
        </Container>
    )
}

export default Contact;