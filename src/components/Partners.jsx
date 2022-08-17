import React, { Component } from 'react';
import spotify from "../img/spotify.svg";
import dell from "../img/dell.svg";
import cisco from "../img/cisco.svg";
import disney from "../img/disney.svg";
import deezer from "../img/deezer.svg";
import verizon from "../img/verizon.svg";
import texas from "../img/texas.svg";

class Partners extends Component {
    render() { 
        return (
            <>
            <section className='Partners' id='home'>
                <div className='Partners__text'>
                <p className="Partners__title">Our Partners</p>
                <p className="Partners__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nihil ipsum iste debitis doloremque nemo ducimus numquam, ea harum accusamus totam ratione eaque aliquid at.</p>
                </div>
        
                <div className='Partners__div'>
                    <span className='Partners__span'>
                        <img src={spotify} alt="" />
                    </span>
                    <span className='Partners__span'>
                        <img src={dell} alt="" />
                    </span>
                    <span className='Partners__span'>
                        <img src={cisco} alt="" />
                    </span>
                    <span className='Partners__span'>
                        <img src={disney} alt="" />
                    </span>
                    <span className='Partners__span'>
                        <img src={deezer} alt="" />
                    </span>
                    <span className='Partners__span'>
                        <img src={verizon} alt="" />
                    </span>
                    <span className='Partners__span'>
                        <img src={texas} alt="" />
                    </span>
                </div>
            </section>
            </>
        );
    }
}
 
export default Partners;