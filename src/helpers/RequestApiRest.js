
const RequestF = ()=>{

    const means = ( endPoint, options)=>{

        const defaultHeader = {

            accept: "application/json",
        }

        const controller = new AbortController()
        options.signal = controller.signal

        options.method = options.method || "Get"

        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader

        options.body = JSON.stringify(options.body) || false
        if(!options.body) delete options.body

        setTimeout(()=>{
            controller.abort()
        },5000)

        return fetch(endPoint, options)
        .then((response)=> response.ok ? ({res:response.json, state: true})  : Promise.reject({
            error :true,
            status: response.status || "00",
            statusText: response.statusText || "Ocurrió un error" 
        }))
        .catch((error)=>{

            return error
        })

    }

    const Get = (url, options={}) =>{
        
        return means(url, options)
    }

    const Post = (url, options={}) =>{

        options.method = "POST"
        return means(url, options)

    }

    const Delete = (url, options={}) =>{

        options.method = "DELETE"
        return means(url, options)

    }

    const Put = (url, options={}) =>{

        options.method = "PUT"
        return means(url, options)

    }

    return {
        Get,
        Post,
        Delete,
        Put
    }

}

export default RequestF