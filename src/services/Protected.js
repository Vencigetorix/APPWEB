export async function protec(token){
    try{
        const id = await fetch("https://magic-poems.herokuapp.com/protected",{
            method:'POST',
            cache: 'default',
            body: JSON.stringify(token)
        }).then(response => response.json())
        .then(json => console.log(json))
        return id
    }catch(e){
        console.log(e)
    }
}