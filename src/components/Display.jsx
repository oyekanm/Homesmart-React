import React, { Component } from 'react';
import table from "../img/table.png"

class Display extends Component {
    render() { 
        return (
            <>
            <section className='Display'>
                <div className='Display--div1'>
                    <p className='Display__title'>Relax, You're Home! </p>
                    <p className='Display__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid dolores fugit cupiditate voluptate, dolorem maiores.</p>
                    <p className='Display__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ut numquam cupiditate esse, laborum voluptates molestiae amet.</p>
                    <div className='btn-button btn-sign'>
                    <a href="#" className='btn '>sign up</a>
                    </div>
                    
                </div>
                <div className='Display--div2'>
                    <img src={table} alt="" className='Display__img' />
                    <span className='Display__span'></span>
                </div>
            </section>
            </>
        );
    }
}
 
export default Display;