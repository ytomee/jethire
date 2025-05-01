'use client';

import { useState, useEffect } from "react";

export default function AboutMeShort({ formData, setFormData }) {

    const [charCount, setCharCount] = useState(0);

    const handleTextChange = (e) => {
        setCharCount(e.target.value.length);
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: {
                ...prevFormData.profile,
                [name]: value,
            },
        }));
    };

        useEffect(() => {
            if (formData?.profile?.aboutMeShort) {
                setCharCount(formData.profile.aboutMeShort.length);
            }
        }, [formData?.profile?.aboutMe]);
    
    return(
        <>
            <div className="textarea-style">
                <textarea 
                    className="font-sm color-text-paragraph-2" 
                    name="aboutMeShort" 
                    placeholder="Diga-nos resumidamente o que disse antes." 
                    maxLength="130"
                    style={{ minHeight: "100px" }} 
                    onChange={handleTextChange}
                    value={formData?.profile?.aboutMeShort || ""}
                />
            </div>
            <p className="char-number">{charCount}/130</p>
        </>
    );
}