import React, { Component } from "react";
import Link from "react-router-dom/Link";
import axios from "axios";
import pokeball from '../pokeball.png'
import  {connect} from 'react-redux'

class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);

