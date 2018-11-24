import React, { Component } from 'react';
import {getItemList} from '../../redux/actions/'
import {connect} from 'react-redux'


class Posts extends Component {

    state = {
        reducer: 'POSTS',
    }

    componentDidMount(){
        this.props.getItemList(this.state.reducer)
    }

    render() {

        const {isFetching, listposts} = this.props

        if(isFetching){
            return <p>Loading data...</p>
        }

        console.log(listposts)

        return (
            <div className="Posts">
            <h1 className="text-center">POSTS</h1>
                <ul className="list-group">
                {
                    listposts.map((post, index) => {

                        return <li key={index} className="list-group-item">{post.title}</li>
                           

                    })
                }
                </ul>
            </div>
        )
  }
}


const mapStateToProps = (state) => {

  return {
      isFetching: state.library.posts.isFetching,
      listposts: state.library.posts.list,

  }
}


export default connect(mapStateToProps, { getItemList })(Posts);

