import React from 'react';
import uuid from 'uuid/v4';


interface AppToolBarProps {
    key?: string,
}


const AppToolBar = (props: AppToolBarProps) => {

    const { key } = props;

    return (
        <div >
           
<nav className="top-nav navbar-fixed-top">
					<div className="Container">
						<div className="col-xs-6 hidden-xs">
							<ul className="list-unstyled navbar-left">
								<li><i className="fa fa-home"></i> Home</li>
								<li><i className="fa fa-bolt"></i>moments</li>
								<li><i className="fa fa-bell"></i>notifactions</li>
								<li><i className="fa fa-envelope"></i>message</li>
                                <li>
                                    <div className="twitter">
								        <i className="fa fa-twitter"></i>
                                    </div> 
                                </li>
                                <li>
                                <form>
                                    <input placeholder="search twitter" />
                                    <i className="fa fa-search"></i></form>
                                </li>
                                <li><i className="fafa-user-circle-o"></i></li>
                                <li><button>tweet</button></li>
							</ul>
						</div>
		
                    </div>
                </nav>
        </div>

    );
  
}

AppToolBar.defaultProps = {
    key: uuid(),
    id: uuid(),
    name: "Name",
    username: "Username",
    picture: "",
   };

export default AppToolBar;