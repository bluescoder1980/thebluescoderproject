import React, { Component}  from 'react';
import { withRouter } from 'react-router-dom';
import './Lander.css'
class Lander extends React.Component {
    showSettings (event) {
        event.preventDefault();

    }
    //Eventually I want to pull the Lander Content from a Dynamo DB
    render () {
        return (

            <div className="Lander">
                <h1>The Bluescoder Project</h1>
                <p>"As long as you live, keep learning how to live." - Seneca</p>

                <p>
                    The Bluescoder Project is an iterative dev project that I have started a few weeks ago to get familiar with
                    Node.js, React, AWS, GitHub and all the different tech, development tools and processes around it.  I'm a former developer,
                    who grew up as an object oriented programmer.  I'm now a tech exec and no longer code day to day, but still love to tinker with the
                    latest and greatest technology and development frameworks out there.  This entire site is being built ground up, from React Bootstrap
                    sitting behind AWS cloud services.  As I learn along the way, I will ask for help, post new projects and ideas
                    and also share a little about what's going on in my world.

                </p>
                <p>-The Bluescoder</p>
            </div>

        );
    }
}

export default withRouter(Lander);