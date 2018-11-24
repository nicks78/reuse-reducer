import React, { Component } from 'react';
import {getItemList} from '../../redux/actions/'
import {connect} from 'react-redux'

class Comments extends Component {


    state = {
        reducer: 'COMMENTS',
    }

    componentDidMount(){
        if(this.props.receivedAt === null ){
            this.props.getItemList(this.state.reducer)
        }
    }

  render() {

    const {isFetching, listcomments} = this.props

    if(isFetching){
        return <p>Loading data...</p>
    }

    return (
        <div className="Comments">
        <h1 className="">COMMENTS</h1>
        <ul className="list-group">
        {
            listcomments.map((comment, index) => {

                return <li key={index} className="list-group-item">{comment.name}</li>
                   

            })
        }
        </ul>
    </div>
    );
  }
}


const mapStateToProps = (state) => {

  return {
      isFetching: state.library.comments.isFetching,
      listcomments: state.library.comments.list,
      receivedAt: state.library.comments.receivedAt,
  }
}


export default connect(mapStateToProps, { getItemList })(Comments);

