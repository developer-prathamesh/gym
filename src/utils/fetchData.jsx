export const exoptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key':'3269290407mshdf50138b51a4d1fp1b0157jsn1a53aa01ec55',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async(url,options)=>{
    const response = await fetch(url,options)
    const data = await response.json()
    return data
}