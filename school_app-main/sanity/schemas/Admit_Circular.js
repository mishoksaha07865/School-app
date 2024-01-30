/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'admit_info',
    type: 'document',
      title: 'Admit_Info',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
     {
        name: 'file',
        title: 'Upload File',
        type: 'file',
        options: {
            accept: ['.pdf','.jpg'], // Limit to PDF files
          },
      },
     
    ]
  }