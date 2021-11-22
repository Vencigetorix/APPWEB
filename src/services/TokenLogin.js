export async function tokenLogin(info){
    try{
        const response = await fetch("https://magic-poems.herokuapp.com/Login",{
            method:'POST',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        if(response.ok){
            const token=await response.json();
            console.log("token1:",token.access_token);
            return token.access_token;
        }else{
            return false;
        }
    }catch(e){
        console.log(e)
    }
}