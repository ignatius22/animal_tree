import React, {useState, useEffect} from 'react';
import './index.css'

export default function Tree() {
    return (
            <div className="tree">
                mammals<br/>
                <span className='space-50'>cheetah</span><br/>
                <span className='space-50'>bear</span><br/>
                <span className='space-95'>lion</span> <br/>
                <span className='space-95'>dog</span> <br/>
                <span className='space-145'>elephant</span> <br/>
                <span className='space-50'>ape</span> <br/>
            </div>
    )
}
