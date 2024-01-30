/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'classrutine',
    type: 'document',
      title: 'ClassRutine',
    fields: [
      {
        name: 'class',
        type: 'string',
        title: 'Class'
      },
      {
        name: 'shift',
        type: 'string',
        title: 'Shift'
      },
      {
        name: 'file',
        title: 'Upload File',
        type: 'file',
        options: {
            accept: '.pdf', // Limit to PDF files
          },
      },
    ]
  }