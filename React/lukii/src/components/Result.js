import axios from 'axios'
import React , {useState , useEffect} from 'react'

const Result = (props) => {
    const {starType , id} = props
    const [finalResult, setFinalResult] = useState("")

    useEffect(() => {
        axios.get('https://swapi.dev/api/'+starType+'/'+id)
        .then(response=>{
            console.log(response.data);
            setFinalResult(response.data)
        })
    }, [starType,id])


    return (
        <div>
            {   
            
                Object.keys(finalResult).map((key,index)=>{
                    return index<4? <p key={key}>{key} : {finalResult[key]}</p> : null
                })
            }
        </div>
    )
}

export default Result
