import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

// Pages
import Comments from '../pages/comments'
import Posts from '../pages/posts'

class Routes extends React.Component {


    render(){
        return (<BrowserRouter basename="/">
            <Switch>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/posts">Posts</Link></li>
                                <li><Link to="/comments">Comments</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/comments" component={Comments} />
                    <Route path="/posts" component={Posts} />
                </div>
                
            </Switch>
        </BrowserRouter>
        )
    }
}



export default Routes;