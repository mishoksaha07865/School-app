/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'result',
    type: 'document',
      title: 'Result',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'class',
        type: 'string',
        title: 'Class'
      },
      {
        name: 'date',
        type: 'date',
        title: 'Date'
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