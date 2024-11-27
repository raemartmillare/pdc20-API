import React from "react";
import './Regis.css'; // Import the CSS file

const Regis = ({ activeTab, formData, onChange, formErrors }) => {
    return (
        <form className="regis-form">
            {activeTab === 'personal' && (
                <div className="form-section">
                    <h2>Personal Information</h2>
                    <label>
                        First Name:
                        <input 
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => onChange('firstName', e.target.value)}
                            placeholder="Enter your first name"
                            required
                            className={formErrors.firstName ? 'error' : ''}
                        />
                        {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
                    </label>
                    <label>
                        Last Name:
                        <input 
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => onChange('lastName', e.target.value)}
                            placeholder="Enter your last name"
                            required
                            className={formErrors.lastName ? 'error' : ''}
                        />
                        {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
                    </label>
                    <label>
                        Date of Birth:
                        <input 
                            type="date"
                            value={formData.dob}
                            onChange={(e) => onChange('dob', e.target.value)}
                            required
                            className={formErrors.dob ? 'error' : ''}
                        />
                        {formErrors.dob && <div className="error-message">{formErrors.dob}</div>}
                    </label>
                    <label>
                        Gender:
                        <select 
                            value={formData.gender}
                            onChange={(e) => onChange('gender', e.target.value)}
                            required
                            className={formErrors.gender ? 'error' : ''}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {formErrors.gender && <div className="error-message">{formErrors.gender}</div>}
                    </label>
                </div>
            )}

            {activeTab === 'contact' && (
                <div className="form-section">
                    <h2>Contact Information</h2>
                    <label>
                        Email:
                        <input 
                            type="email"
                            value={formData.email}
                            onChange={(e) => onChange('email', e.target.value)}
                            placeholder="Enter your email"
                            required
                            className={formErrors.email ? 'error' : ''}
                        />
                        {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                    </label>
                    <label>
                        Phone Number:
                        <input 
                            type="text"
                            value={formData.phone}
                            onChange={(e) => onChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                            required
                            className={formErrors.phone ? 'error' : ''}
                        />
                        {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
                    </label>
                    <label>
                        Address:
                        <input 
                            type="text"
                            value={formData.address}
                            onChange={(e) => onChange('address', e.target.value)}
                            placeholder="Enter your address"
                            required
                            className={formErrors.address ? 'error' : ''}
                        />
                        {formErrors.address && <div className="error-message">{formErrors.address}</div>}
                    </label>
                    <label>
                        City:
                        <input 
                            type="text"
                            value={formData.city}
                            onChange={(e) => onChange('city', e.target.value)}
                            placeholder="Enter your city"
                            required
                            className={formErrors.city ? 'error' : ''}
                        />
                        {formErrors.city && <div className="error-message">{formErrors.city}</div>}
                    </label>
                </div>
            )}

            {/* Academic Information Section */}
            {activeTab === 'academic' && (
                <div className="form-section">
                    <h2>Academic Information</h2>
                    <label>
                        Student ID:
                        <input 
                            type="text"
                            value={formData.studentId}
                            onChange={(e) => onChange('studentId', e.target.value)}
                            placeholder="Enter your student ID"
                            required
                            className={formErrors.studentId ? 'error' : ''}
                        />
                        {formErrors.studentId && <div className="error-message">{formErrors.studentId}</div>}
                    </label>
                    <label>
                        Program:
                        <input 
                            type="text"
                            value={formData.program}
                            onChange={(e) => onChange('program', e.target.value)}
                            placeholder="Enter your program"
                            required
                            className={formErrors.program ? 'error' : ''}
                        />
                        {formErrors.program && <div className="error-message">{formErrors.program}</div>}
                    </label>
                    <label>
                        Year Level:
                        <input 
                            type="text"
                            value={formData.yearLevel}
                            onChange={(e) => onChange('yearLevel', e.target.value)}
                            placeholder="Enter your year level"
                            required
                            className={formErrors.yearLevel ? 'error' : ''}
                        />
                        {formErrors.yearLevel && <div className="error-message">{formErrors.yearLevel}</div>}
                    </label>
                    <label>
                        GPA:
                        <input 
                            type="text"
                            value={formData.gpa}
                            onChange={(e) => onChange('gpa', e.target.value)}
                            placeholder="Enter your GPA"
                            required
                            className={formErrors.gpa ? 'error' : ''}
                        />
                        {formErrors.gpa && <div className="error-message">{formErrors.gpa}</div>}
                    </label>
                </div>
            )}

            {/* Additional Details Section */}
            {activeTab === 'additional' && (
                <div className="form-section">
                    <h2>Additional Details</h2>
                    <label>
                        Hobbies:
                        <input 
                            type="text"
                            value={formData.hobbies}
                            onChange={(e) => onChange('hobbies', e.target.value)}
                            placeholder="Enter your hobbies"
                            required
                            className={formErrors.hobbies ? 'error' : ''}
                        />
                        {formErrors.hobbies && <div className="error-message">{formErrors.hobbies}</div>}
                    </label>
                    <label>
                        Skills:
                        <input 
                            type="text"
                            value={formData.skills}
                            onChange={(e) => onChange('skills', e.target.value)}
                            placeholder="Enter your skills"
                            required
                            className={formErrors.skills ? 'error' : ''}
                        />
                        {formErrors.skills && <div className="error-message">{formErrors.skills}</div>}
                    </label>
                    <label>
                        Other Notes:
                        <textarea 
                            value={formData.notes}
                            onChange={(e) => onChange('notes', e.target.value)}
                            placeholder="Enter any additional notes"
                            required
                            className={formErrors.notes ? 'error' : ''}
                        />
                        {formErrors.notes && <div className="error-message">{formErrors.notes}</div>}
                    </label>
                </div>
            )}

            {/* Submit Button */}
            <div className="form-section">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Regis;
