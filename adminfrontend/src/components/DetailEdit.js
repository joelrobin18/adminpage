import React from 'react'
import { Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput}
  from 'react-admin'

const DetailEdit = (props) => {
    return (
        <Edit title="Edit the Details" {...props}>
            <SimpleForm>
                <TextInput source='Name'/>
                <TextInput source='OTP_status'/>
                <NumberInput source='Phone'/>
                <TextInput multiline source='Address'/>
                <DateInput label='Date' source='slot'/>
            </SimpleForm>
        </Edit>
    )
}

export default DetailEdit
