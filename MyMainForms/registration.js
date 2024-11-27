// TabContent.js
import React from "react";

const Regis = ({ activeTab, formData, onChange }) => {
    return (
        <div style={{ padding: '20px' }}>
            {activeTab === 'personal' && (
                <div>
                    <h2>Personal Information</h2>
                    <label>
                        First Name:
                        <input 
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => onChange('firstName', e.target.value)}
                            placeholder="Enter your first name"
                        />
                    </label>
                    <label>
                        Last Name:
                        <input 
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => onChange('lastName', e.target.value)}
                            placeholder="Enter your last name"
                        />
                    </label>
                    <label>
                        Date of Birth:
                        <input 
                            type="date"
                            value={formData.dob}
                            onChange={(e) => onChange('dob', e.target.value)}
                        />
                    </label>
                    <label>
                        Gender:
                        <select 
                            value={formData.gender}
                            onChange={(e) => onChange('gender', e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>
            )}

            {activeTab === 'contact' && (
                <div>
                    <h2>Contact Information</h2>
                    <label>
                        Email:
                        <input 
                            type="email"
                            value={formData.email}
                            onChange={(e) => onChange('email', e.target.value)}
                            placeholder="Enter your email"
                        />
                    </label>
                    <label>
                        Phone Number:
                        <input 
                            type="text"
                            value={formData.phone}
                            onChange={(e) => onChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                        />
                    </label>
                    <label>
                        Address:
                        <input 
                            type="text"
                            value={formData.address}
                            onChange={(e) => onChange('address', e.target.value)}
                            placeholder="Enter your address"
                        />
                    </label>
                    <label>
                        City:
                        <input 
                            type="text"
                            value={formData.city}
                            onChange={(e) => onChange('city', e.target.value)}
                            placeholder="Enter your city"
                        />
                    </label>
                </div>
            )}

            {activeTab === 'academic' && (
                <div>
                    <h2>Academic Information</h2>
                    <label>
                        Student ID:
                        <input 
                            type="text"
                            value={formData.studentId}
                            onChange={(e) => onChange('studentId', e.target.value)}
                            placeholder="Enter your student ID"
                        />
                    </label>
                    <label>
                        Program:
                        <input 
                            type="text"
                            value={formData.program}
                            onChange={(e) => onChange('program', e.target.value)}
                            placeholder="Enter your program"
                        />
                    </label>
                    <label>
                        Year Level:
                        <input 
                            type="text"
                            value={formData.yearLevel}
                            onChange={(e) => onChange('yearLevel', e.target.value)}
                            placeholder="Enter your year level"
                        />
                    </label>
                    <label>
                        GPA:
                        <input 
                            type="text"
                            value={formData.gpa}
                            onChange={(e) => onChange('gpa', e.target.value)}
                            placeholder="Enter your GPA"
                        />
                    </label>
                </div>
            )}

            {activeTab === 'additional' && (
                <div>
                    <h2>Additional Details</h2>
                    <label>
                        Hobbies:
                        <input 
                            type="text"
                            value={formData.hobbies}
                            onChange={(e) => onChange('hobbies', e.target.value)}
                            placeholder="Enter your hobbies"
                        />
                    </label>
                    <label>
                        Skills:
                        <input 
                            type="text"
                            value={formData.skills}
                            onChange={(e) => onChange('skills', e.target.value)}
                            placeholder="Enter your skills"
                        />
                    </label>
                    <label>
                        Other Notes:
                        <textarea 
                            value={formData.notes}
                            onChange={(e) => onChange('notes', e.target.value)}
                            placeholder="Enter any additional notes"
                        />
                    </label>
                </div>
            )}
        </div>
    );
};

export default Regis;
