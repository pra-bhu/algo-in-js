const json = {
  "diy": {
    "id": "7",
    "url": "/test1w",
    "active": false,
    "title_en": "test1",
    "title_ar": "test1",
    "product_category": "interior",
    "tooltip_info_en": "ashish",
    "tooltip_info_ar": "test1",
    "hide_tooltip": false,
    "seo_title_en": "test1",
    "seo_title_ar": "test1",
    "seo_keywords_en": "test1",
    "seo_keywords_ar": "test1",
    "seo_description_en": "test1",
    "seo_description_ar": "test1",
    "main_section_photo": {
      "file_id": "7769",
      "alt_text_ar": "test1",
      "alt_text_en": "test1"
    },
    "products_section": [
      {
        "index": "0",
        "product_id": "1",
        "quantity": "11",
        "color": "2367",
        "size": "20"
      }
    ],
    "steps_section": {
      "title_en": "test1",
      "title_ar": "test1",
      "steps": [
        {
          "index": "1",
          "title_en": "test1",
          "title_ar": "test1",
          "description_en": "test1",
          "description_ar": "test1",
          "alt_text_en": "test1",
          "alt_text_ar": "test1",
          "file_id": "7770"
        }
      ]
    },
    "video_section": {
      "video_en": {
        "source_type": "youtube",
        "video_url": "https://www.youtube.com/watch?v=VV9vcTaa3h4",
        "video_id": "VV9vcTaa3h4"
      },
      "video_ar": {
        "source_type": "youtube",
        "video_url": "https://www.youtube.com/watch?v=VV9vcTaa3h4",
        "video_id": "VV9vcTaa3h4"
      },
      "title_en": "test1",
      "title_ar": "test1"
    },
    "updated_at": "2020-05-12T07:42:55.711Z",
    "inserted_at": "2020-05-12T07:42:55.711Z"
  },
  "files": [
    {
      "id": 1,
      "name": "AFRW",
      "type": "application/pdf",
      "download_url": "https://paints-staging.s3.amazonaws.com/staging/initial_files/catalogues/AFRW.pdf",
      "size": 8630
    }
  ]
}


const parseArrayOfObject = (array:Array<any>,searchKey:string) => {
  let arr = array.map((obj:any)=> {
    let keys = Object.keys(obj)
    let objs = keys.map((key:string)=>{
      if(Array.isArray(obj[key])){
        return parseArrayOfObject(obj[key],searchKey)
      }
      // if(key.includes(searchKey) || key.endsWith(searchKey)){
        if(Number(obj[key])) obj[key] = Number(obj[key])
    })
    return obj
  })
  console.log(arr)
}