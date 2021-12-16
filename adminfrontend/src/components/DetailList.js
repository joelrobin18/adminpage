import React from 'react'
import { 
    List,
    Datagrid,
    TextField,
    EmailField,
    NumberField ,
    EditButton,
    DeleteButton,
    DateField
    } from 'react-admin'

const PostList = (props) => {
    return (
       <List {...props}>
           <Datagrid>
               <TextField source='id'></TextField>
               <TextField source='Name'></TextField>
               <EmailField source='Email'></EmailField>
               <TextField source='OTP_status'></TextField>
               <NumberField source='Phone'></NumberField>
               <TextField multiline source='Address' ></TextField>               
               <TextField source='District'></TextField>
               <DateField source='slot'/>
               <EditButton basePath='/details'></EditButton>
               <DeleteButton basePath='/details'></DeleteButton>
           </Datagrid>
       </List>
    )
}

export default PostList
