import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(pros) {
        super(pros)

        this.state ={

        }
    }


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expnad-md navbar-dark bg-dark">
                        <div className="heaad"><a href="https://github.com" className="navbar-brand">Employee Management App</a> </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;