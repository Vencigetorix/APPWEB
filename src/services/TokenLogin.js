export async function tokenLogin(info){
    try{
        const data = await fetch("https://magic-poems.herokuapp.com/Login",{
            method:'POST',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })/*.then(response => response.json())
        .then(json => console.log(json))*/
        const token=await data.json();
        console.log("token1:",token.access_token);
        if(token.access_token!==undefined){
            return 1;
        }else{
            return 2;
        }
    }catch(e){
        console.log(e)
    }
}