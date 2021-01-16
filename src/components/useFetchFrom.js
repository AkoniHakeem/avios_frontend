import { useEffect} from "react";

const useFetch = (request, callback) => {
    useEffect(() => {
            fetch(request).then((res) => {
                if(res.ok) {
                   return res.json()
                } 
            }).then(result=> {
                console.log(result)
                callback(result)
            })
            .catch(err => console.log(err))
    
    }, [])
}

export default useFetch

