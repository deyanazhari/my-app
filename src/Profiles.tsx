import path from 'path'
import React from 'react'
import {Route,useResolvedPath} from 'react-router-dom'
import Settings from './Settings';
import Detail from './Detail';


const Profiles = () => {
    const path = useResolvedPath("").pathname;
    return (
    <div>
        <h1>Hallo Teman teman</h1>
        <ul>
            <li></li>
            <li></li>
        </ul>
        <Route path ={`${path}/settings`} element={<Settings/>}/>
        <Route path ={`${path}/detail`} element={<Detail/>}/>

    </div>
  )
}

export default Profiles