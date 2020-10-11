import React,{useEffect,useState} from 'react'
import axios from 'axios';

function RJ_1_DataFetching() {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [post,setPost] = useState({});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            setLoading(false);
            setError('');
            setPost(res.data)
        }).catch(err=>{
            setLoading(false);
            setError('Error');
            setPost({})
        })
    },[])

    return (
        <div>            
            {loading ?'Loading...':post.title}
            {error !=='' ?error:''}
        </div>
    )
}

export default RJ_1_DataFetching
