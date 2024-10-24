import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .required('Full Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        phone: Yup.string()
            .required('Phone number is required'),
        comments: Yup.string()
            .max(500, 'Comments cannot exceed 500 characters')
    });

    const handleSubmit = (values) => {
        console.log(values);
        // Handle form submission (e.g., send data to an API)
    };

    return (
        <Formik
            initialValues={{ fullName: '', email: '', phone: '', comments: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit }) => (
                <Form className='custom-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='fullName'>Full Name</label>
                        <Field type='text' name='fullName' className='form-control' />
                        <ErrorMessage name='fullName' component='div' className='text-danger' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <Field type='text' name='email' className='form-control' />
                        <ErrorMessage name='email' component='div' className='text-danger' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone</label>
                        <Field type='text' name='phone' className='form-control' />
                        <ErrorMessage name='phone' component='div' className='text-danger' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='comments'>Comments</label>
                        <Field as='textarea' name='comments' className='form-control h-150' />
                        <ErrorMessage name='comments' component='div' className='text-danger' />
                    </div>
                    <div className='mt-5 pt-3'>
                        <button type='submit' className='btn-black-theme w-100'>Send</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
