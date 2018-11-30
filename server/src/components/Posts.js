import React from 'react';
import Post from './Post';

export default class Posts extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            posts: undefined
        }
    }

    async componentDidMount(){
        let rawResponse = await fetch('/api/posts')
        let posts = await rawResponse.json()
        this.setState({ posts: posts.data.docs })
    }

    render(){
        return (
            <div>
                {!this.state.posts ? (<p>no posts...</p>) : this.state.posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        )
    }
}