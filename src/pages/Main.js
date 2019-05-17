import React, { Component } from 'react';
import {ExpProjectCard} from 'components/Project/Card';

class Main extends Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent:'center', margin: '10%'}}>
                <ExpProjectCard
                    projectname='Pljec' nickname='Furge'
                    simple_descript='Web matching people to need team...'
                    description = 'Web matching people to need team. SPA implemented react'/>
            </div>
        )
    }
}

export default Main;