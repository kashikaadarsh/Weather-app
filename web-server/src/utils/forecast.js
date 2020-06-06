const request=require('request')


const forecast =(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=36d09907b29fcdbd95d813cae01dd92f&query='+latitude+','+longitude+'&units=m'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to location services!',undefined)
        }else if(response.body.error){
            callback('Unable to find location.Try another search',undefined)

        }
        else{
            callback(undefined,response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees. But it feels like ' + response.body.current.feelslike + ' degrees out')

        }

    })

}

module.exports=forecast