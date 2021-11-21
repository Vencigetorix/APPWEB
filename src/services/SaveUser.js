
export async function saveUser(info){
    try{
        const data = await fetch("https://magic-poems.herokuapp.com/singUp",{
            method:'POST',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then(response => response.json())
        .then(json => console.log(json))
        //const response = await data.json()
        return data
    }catch(e){
        console.log(e)
    }
}