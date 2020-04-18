import im1 from "./images/im1.PNG"
import im2 from "./images/second.JPG"
import im3 from "./images/3.JPG"

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Contract Bioinformatics Research",
      featured: true,
      
      images: [
        {
          fields: {
            file: {
              url: im1
            }
          }
        }
      ]
    }
  },
  
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Knowledgebase Development",
      featured: true,
     
      images: [
        {
          fields: {
            file: {
              url: im2
            }
          }
        }
        
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Bioinformatics Software Development",
      
      featured: true,
      
      images: [
        {
          fields: {
            file: {
              url: im3
            }
          }
        }
        
      ]
    }
  }
];
