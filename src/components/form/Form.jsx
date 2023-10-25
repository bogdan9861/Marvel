import React, { useDeferredValue, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'


import Service from '../service/Service'

import './Form.scss'

const Form = () => {

    const [char, setChar] = useState(null)

    const { getCharacterByName, loading, error, clearError } = Service();

    const getCharacter = (name) => {
        clearError();

        getCharacterByName(name)
            .then(res => setChar(res))
            .catch(e => console.error(e))
    }

    console.log(char);

    const errorMessage = error
        ?
        <div className='search__text'><ErrorMessage /></div>
        :
        null

    const result = !char ? null
        : char.length > 0 ?
            <div className='search__inner-bot'>
                <p className='search__text'>There is! {char[0].name} Visit page?</p>
                <Link className="search__btn btn whiteBG" to={`/char/${char[0].id}`}>TO PAGE</Link>
            </div>
            :
            <p className='search__text'>The character was not found. Check the name and try again</p>

    return (
        <Formik
            initialValues={{
                charName: ''
            }}
            validationSchema={yup.object({
                charName: yup.string().required('This field is required')
            })}

            onSubmit={({ charName }) => getCharacter(charName)}
        >
            <FormikForm className="search">
                <h4 className="search__title">Or find a character by name:</h4>
                <div className="search__inner">
                    <Field
                        className="search__input"
                        placeholder="Enter character name"
                        type="text"
                        id="charName"
                        name="charName"
                    />
                    <button className="search__btn btn red whiteBG" type='submit'>FIND</button>
                </div>
                {result}
                {errorMessage}
            </FormikForm>

        </Formik>
    )
}

export default Form