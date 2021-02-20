import React, { Component } from 'react';

class FooterComponet extends Component {
    
    constructor(pros) {
        super(pros)

        this.state ={
            
        }
    }
    
    
    
    render() {
        return (
            <div>
               <footer className="footer blockquote-footer">
                    <span className="text-muted">All Rights Reserved 2021 Prem-Almeida</span>   
                </footer> 
            </div>
        );
    }
}

export default FooterComponet;