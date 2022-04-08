import React, { Component } from "react";
import Link from "react-router-dom/Link";
import axios from "axios";
import pokeball from '../pokeball.png'

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                });
            })
    }
    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={pokeball} alt="a pockball" />
                        <div className="card-content">
                            <Link to={'/posts/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                                <p>{post.body}</p>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No pot yet</div>
        )
        return (
            <div>
                <div className="container home">
                    <h4 className="center">Home</h4>
                    {postList}
                </div>
            </div>
        );
    }
}

export default Home;

