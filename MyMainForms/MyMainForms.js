import React from "react";
import BasicForms from "./BasicForms";
import ControllerInput from "./ControllerInput";
import UncontrolledInput from "./UncontrolledImput";
import TabContent from "./SubForm/TabContent";
import { Route, Routes, Link } from "react-router-dom";
import TabbedForm from "./SubForm/TabbedForm";
import Regis from "./registration";
import MyData from "./MyData";

const MyMainForms = () => {
    
    return (
        <div>
            <h1>React Form Apps</h1>
            <nav>
                <ul>
                    <li><Link to="basic-form"> please click me</Link></li>
                    <li><Link to="controller-input">Please Enter Email</Link> </li>
                    <li><Link to="uncontroller-input">Please Enter Phone Number</Link> </li>
                    <li><Link to="tab_form">Please Fill up the information</Link> </li>
                    <li><Link to="registration">Please fill the new registration form</Link> </li>
                    <li><Link to="table">Table API</Link> </li>

                </ul>
            
            </nav>
            
            <Routes>
                <Route path="basic-form" element={<BasicForms/>}/>       
                <Route path="controller-input" element={<ControllerInput/>}/> 
                <Route path="uncontroller-input" element={<UncontrolledInput/>}/>
                <Route path="tab_form" element={<TabbedForm/>}/>
                <Route path="registration" element={<Regis/>}/>
                <Route path="table" element={<MyData/>}/>

                                                      
            </Routes>

        </div>

    );
};

export default MyMainForms;