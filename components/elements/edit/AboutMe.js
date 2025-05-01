'use client';

import { useState, useEffect } from "react";

export default function AboutMe({ formData, setFormData }) {

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
        if (formData?.profile?.aboutMe) {
            setCharCount(formData.profile.aboutMe.length);
        }
    }, [formData?.profile?.aboutMe]);
    
    return(
        <>
            <div className="textarea-style">
                <textarea 
                    className="font-sm color-text-paragraph-2" 
                    name="aboutMe" 
                    placeholder="Conte-nos um pouco sobre si." 
                    maxLength="1800"
                    onChange={handleTextChange}
                    value={formData?.profile?.aboutMe || ""}
                />
            </div>
            <p className="char-number">{charCount}/1800</p>
        </>
    );
}