const beforData = require("./data.json");
const { get } = require("lodash");
let afterData = {};
afterData.title = { collectionName: beforData.info.name };
afterData.title = {
  ...afterData.title,
  apiName: beforData.item.map((value, index) => {
    return value.name;
  })
};
afterData = {
  ...afterData,
  item: beforData.item.map((value, index) => {
    const { request } = value;
    
    let bodyJson = request.body.raw 
      ? JSON.parse(
          request.body.raw
            .replace(/\n/gi, "")
            .replace(/\t/gi, "")
            .replace(/\"/gi, '"')
        )
      : "";
    let respData = {
      name: value.name,
      method: request.method,
      url: request.url.raw,
      headerField: request.header,
      bodyField: bodyJson
    };
    return respData;
  })
};

console.log("after , ", JSON.stringify(afterData, null, 2));
