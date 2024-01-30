/* eslint-disable import/no-anonymous-default-export */


export const BLOOD = [
    {title: 'AB+', value: 'AB+'},
    {title: 'AB-', value: 'AB-'},
    {title: 'A+', value: 'A+'},
    {title: 'A-', value: 'A-'},
    {title: 'B+', value: 'B+'},
    {title: 'B-', value: 'B-'},
    {title: 'O+', value: 'O+'},
    {title: 'O-', value: 'O-'},
    
  ]
export default {
    name: 'teacher',
    type: 'document',
    title: 'Teacher',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Full Name'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
    
      {
        name: 'dob',
        type: 'date',
        title: 'Date of Birth'
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Mobile Number'
      },
      {
        name: 'join_date',
        type: 'date',
        title: 'Join Date'
      },
      {
        name: 'background',
        type: 'string',
        title: 'Educational Background'
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address'
      },
      {
        name: 'subject',
        type: 'string',
        title: 'Subject'
      },
      {
        name: 'email',
        type: 'email',
        title: 'Email'
      },
     
     
      {
        name: 'blood_group',
        type: 'string',
        options: {
            list: BLOOD.map(({title, value}) => ({title, value})),
            layout: 'radio',
          },
        title: 'Blood Group'
      },

      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'image',
        type: 'image',
        options:{
            hotspot: true,
        },
        title: 'Image'
      },
    ]
  }