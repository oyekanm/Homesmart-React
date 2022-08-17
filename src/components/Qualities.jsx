import React, { Component } from 'react';
import dot from "../img/dots.svg";

class Qualities extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <section className='Qualities'>
                <div className='dot--1'>
                    <img src={dot} alt="dot" className='dot'/>
                </div>
                <div className='dot--2'>
                    <img src={dot} alt="dot" className='dot'/>
                </div>
                <div className='Qualities__features'>
                    <div className='Qualities__feat'>
                        <span className='Qualities__span'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"></path></svg>
                        </span>
                        <p className="Qualities__Title">Safe</p>
                        <p className="Qualities__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus magnam dignissimos.</p>
                    </div>
                    <div className='Qualities__feat'>
                        <span className='Qualities__span'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-paypal" viewBox="0 0 16 16">
                                <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"/>
                        </svg></span>
                        <p className="Qualities__Title">Easy Payment</p>
                        <p className="Qualities__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus magnam dignissimos.</p>
                    </div>
                    <div className='Qualities__feat'>
                        <span className='Qualities__span'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        </span>
                        <p className="Qualities__Title">Anytime</p>
                        <p className="Qualities__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus magnam dignissimos.</p>
                    </div>
                </div>

            </section>
            </>
        );
    }
}
 
export default Qualities;