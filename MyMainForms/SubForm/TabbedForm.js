import React, { useState } from 'react';
import Tab from './Tab'; // Assuming Tab is a simple clickable component
import TabContent from './TabContent';

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        studentId: '',
        program: '',
        yearLevel: '',
        gpa: '',
        hobbies: '',
        skills: '',
        notes: ''
    });
    const [formErrors, setFormErrors] = useState({});

    // Handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Handle form input changes
    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
        // Clear error for the specific field when the user changes its value
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [field]: ''
        }));
    };

    // Validate the form before submission
    const validateForm = () => {
        const errors = {};

        // Required fields validation
        if (!formData.firstName) errors.firstName = 'First Name is required';
        if (!formData.lastName) errors.lastName = 'Last Name is required';
        if (!formData.dob) errors.dob = 'Date of Birth is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.phone) errors.phone = 'Phone Number is required';
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.city) errors.city = 'City is required';
        if (!formData.studentId) errors.studentId = 'Student ID is required';
        if (!formData.program) errors.program = 'Program is required';
        if (!formData.yearLevel) errors.yearLevel = 'Year Level is required';
        if (!formData.gpa) errors.gpa = 'GPA is required';
        
        // Check if any errors exist
        return errors;
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate form data
        const errors = validateForm();
        
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            alert("Please fill in all the required fields.");
            return; // Prevent submission if there are errors
        }

        // If no errors, submit the form and alert the data
        alert(`Form Submitted Successfully!\n\nSubmitted Data:\n${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div>
            <h1>Tabbed Form with Shared State</h1>
            
            {/* Tab Navigation */}
            <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                <Tab
                    name="Personal Information"
                    isActive={activeTab === 'personal'}
                    onClick={() => handleTabChange('personal')}
                />
                <Tab
                    name="Contact Information"
                    isActive={activeTab === 'contact'}
                    onClick={() => handleTabChange('contact')}
                />
                <Tab
                    name="Academic Information"
                    isActive={activeTab === 'academic'}
                    onClick={() => handleTabChange('academic')}
                />
                <Tab
                    name="Additional Details"
                    isActive={activeTab === 'additional'}
                    onClick={() => handleTabChange('additional')}
                />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <TabContent
                    activeTab={activeTab}
                    formData={formData}
                    onChange={handleChange}
                    formErrors={formErrors} // Pass errors to TabContent to highlight invalid fields
                />
                <div className="form-section">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default TabbedForm;
