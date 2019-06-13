const beforData = require('./dataen.json')
let afterData={
    name:beforData.name,
}
afterData = {
    ...afterData,
    value:beforData.values.map((value,index) => {
        const resp = {
            key:value.key,
            value:value.value,
            type:value.type
        }
        return resp
    })

}
console.log('after data ', JSON.stringify(afterData,null,2))