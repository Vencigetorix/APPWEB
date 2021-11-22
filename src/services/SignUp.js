export async function signUp(info){
    try{
        console.log(info)
        const data = await fetch("https://magic-poems.herokuapp.com/singUp",{
            method:'POST',
            cache: 'default',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        //const response = await data.json()
        if(data.ok){
            console.log("Exitoso");
            const jsond = await data.json();
            console.log(jsond);
            return true
        }else{
            console.log("No se pudo resgistrar");
            return false
        }
    }catch(e){
        console.log(e)
    }
}