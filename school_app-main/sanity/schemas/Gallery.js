/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'gallery',
    type: 'document',
      title: 'Gallery',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options:{
            hotspot:true,
        }
      },
    ]
  }