/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'notice',
    type: 'document',
      title: 'Notice',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
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
            accept: ['.pdf',], // Limit to PDF files
          },
      },
     
    ]
  }