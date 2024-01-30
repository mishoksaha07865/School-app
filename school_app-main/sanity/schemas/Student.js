/* eslint-disable import/no-anonymous-default-export */


export const CLASS = [
    {title: 'Six', value: 'six'},
    {title: 'Seven', value: 'seven'},
    {title: 'Eight', value: 'eight'},
    {title: 'Nine', value: 'nine'},
    {title: 'Ten', value: 'ten'},
    
  ]
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
    name: 'student',
    type: 'document',
    title: 'Student',
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
        name: 'fathers_name',
        type: 'string',
        title: 'Fathers Name'
      },
      {
        name: 'mothers_name',
        type: 'string',
        title: 'Mothers Name'
      },
      {
        name: 'dob',
        type: 'date',
        title: 'Date of Birth'
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address'
      },
      {
        name: 'roll_no',
        type: 'string',
        title: 'Roll Number'
      },
      {
        name: 'class',
        title: 'Class',
        type: 'string',
        options: {
          list: CLASS.map(({title, value}) => ({title, value})),
          layout: 'radio',
        },
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