import React, { Component } from 'react'
import './card.styles.css'

import axios from 'axios'

class Card extends Component {
    state = {
        
        comments: [],
        headings: ['Small Features', 'Booking Engine', 'Rates', 'CC Gateway', 'CRM/Email Marketing']

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments?_limit=15')
        .then(res => {
        this.setState({comments:res.data}, console.log(this.state))
       
        })
        .catch(error => 
            {console.log(error)})
    }
    
    render() {
        const { comments, headings } = this.state

            return (
                <div>
                    <div className='heading'>
                            {headings.map((heading, index) => (
                            <h3 key={index}>{heading}</h3>
                            ))}
                        
                    </div>
                    <div className='App'>
                        <div className='main'>
              
                            {comments.map(({id,name, body})  => 
                            <div key={id} className='card'>
                                <h3>{name}</h3>  
                                {body}                 
                            </div>
                            )}
                         </div>
                    <div className='aside'>
                            {comments.slice(0,2).map((element, index) => 
                                <div key={index} className='card'>
                                    <h3>{element.name}</h3>  
                                        {element.body}             
                                </div> )} 
                        </div>
                    </div>
                </div>
        )
    }
}
export default Card