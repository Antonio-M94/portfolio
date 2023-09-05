import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import Alert from './Alert';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const FORM_URL = import.meta.env.VITE_FORM_URL;

  useEffect(() => {
    if (success) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2500);
    }
  }, [success]);

  return (
    <div
      id='contact'
      className='mx-auto max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] md:pl-20 pt-32 relative'
    >
      <h1 className='text-4xl font-bold text-center text-[#001b5e] p-4'>Contact</h1>
      <h2 className='text-2xl font-bold text-center text-[#001b5e] pt-2 pb-4'>
        I am available to work and collaborate.
      </h2>

      <div className='w-full md:w-3/4 mx-auto pb-24 h-3/4'>
        <div className='w-full flex justify-center'>
          {showAlert && <Alert severity={success}>Successful delivery!</Alert>}
        </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={async (values, { resetForm }) => {
            const body = new FormData();
            Object.entries(values).forEach(([key, val]) => {
              body.append(key, val);
            });
            const res = await fetch(FORM_URL, {
              method: 'POST',
              headers: { accept: 'application/json' },
              body,
            });
            if (!res.ok) {
              console.error(res.status, await res.text());
            } else {
              const state = await res.json();
              setSuccess(state.success);
              resetForm();
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className='p-4 rounded-xl shadow-lg shadow-gray-300 bg-slate-100'>
              <div className='flex flex-col py-2'>
                <label htmlFor='name' className='uppercase text-sm py-2'>
                  Name
                </label>
                <Field
                  id='name'
                  className='w-full flex items-center border-2 rounded-lg p-3 border-gray-300'
                  type='text'
                  name='name'
                  placeholder='Enter your name'
                />
                <ErrorMessage name='name' component='div' className='text-red-500' />
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='email' className='uppercase text-sm py-2'>
                  Email Address
                </label>
                <Field
                  id='email'
                  className='w-full flex items-center border-2 rounded-lg p-3 border-gray-300'
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                />
                <ErrorMessage name='email' component='div' className='text-red-500' />
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='subject' className='uppercase text-sm py-2'>
                  Subject
                </label>
                <Field
                  id='subject'
                  className='w-full flex items-center border-2 rounded-lg p-3 border-gray-300'
                  type='text'
                  name='subject'
                  placeholder='Enter the subject'
                />
                <ErrorMessage name='subject' component='div' className='text-red-500' />
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='message' className='uppercase text-sm py-2'>
                  Message
                  <Field
                    id='message'
                    as='textarea'
                    className='w-full border-2 rounded-lg p-3 border-gray-300'
                    rows={6}
                    name='message'
                    placeholder='Enter your message'
                  />
                </label>
                <ErrorMessage name='message' component='div' className='text-red-500' />
              </div>
              <button
                className='w-full p-4 mt-4 text-gray-100 bg-[#001b5e] rounded-lg'
                type='submit'
                disabled={isSubmitting}
              >
                Send message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Contact;
