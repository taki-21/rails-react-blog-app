import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/posts')
        .then(res => {
            setPosts(res.data)
        })
    }, [])

    return (
        <div>
            <ul>
            {
                posts.map(post => <li key={post.id}> {post.title} </li>)
            }
            </ul>

        </div>
    )
}

export default ApiFetch
