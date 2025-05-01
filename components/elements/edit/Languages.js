'use client';

import { useState, useEffect } from 'react';

export default function Languages({ formData, setFormData }) {
  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState('');

  useEffect(() => {
    const existingLanguages = formData?.profile?.languages || [];
    setLanguages(existingLanguages);
  }, [formData]);

  const addLanguage = (e) => {
    e.preventDefault();
    if (newLanguage.trim() === '' || languages.length >= 4) return;

    setLanguages((prev) => [...prev, newLanguage.trim()]);
    setNewLanguage('');
  };

  const removeLanguage = (index) => {
    const updated = languages.filter((_, i) => i !== index);
    setLanguages(updated);
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profile: {
        ...prevFormData.profile,
        languages: languages,
      },
    }));
  }, [languages, setFormData]);

  return (
    <div className="row">
        <div className="col-lg-3">
            <div className="input-style mb-20">
                <input
                className="font-sm color-text-paragraph-2"
                name="language"
                placeholder="ex: Português"
                type="text"
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                disabled={languages.length >= 4}
                />
            </div>
        </div>
        <div className="col-lg-1">
            <button
                className="btn-submit-register-form"
                onClick={addLanguage}
                disabled={languages.length >= 4}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>

        {languages.map((language, index) => (
        <div className="col-lg-2 language-item" key={index}>
            <span className="me-2">{language}</span>
            <button
            type="button"
            className="remove-button-profile"
            onClick={() => removeLanguage(index)}
            >
            <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
        ))}

    </div>
  );
}
