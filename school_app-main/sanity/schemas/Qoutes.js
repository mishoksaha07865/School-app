/* eslint-disable import/no-anonymous-default-export */
export default{
    name: "Quotes",
    type: "document",
    fields: [
      {
        name: "principal",
        type: "object",
        title:"Principal",
        fields: [
          {
            name: "name",
            type: "string",
            title:"Name",
          },
          {
            name: "description",
            type: "string",
            title:"Description",
          },
          {
            name: "title",
            type: "string",
            title:"Title",
          },
          {
            name: "image",
            type: "image",
            options:{
                hotspot: true,
            },
            title:"Image",
          }
        ]
      },
      {
        name: "president",
        type: "object",
        title:"President",
        fields: [
          {
            name: "name",
            type: "string",
            title:"Name",
          },
          {
            name: "description",
            type: "string",
            title:"Description",
          },
          {
            name: "title",
            type: "string",
            title:"Title",
          },
          {
            name: "image",
            type: "image",
            options:{
                hotspot: true,
            },
            title:"Image",
          }
        ]
      }
    ]
  }