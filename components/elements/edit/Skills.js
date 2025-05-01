'use client';

import { useState, useRef, useEffect } from 'react';

export default function Skills({ formData, setFormData }) {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    name: '',
    value: 0,
  });

  const progressRef = useRef(null);

  useEffect(() => {
    if (formData?.profile?.skills) {
      setSkills(formData.profile.skills);
    }
  }, [formData]);

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const progressBar = progressRef.current;
    if (!progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    let newWidth = ((e.clientX - rect.left) / rect.width) * 100;

    newWidth = Math.max(0, Math.min(newWidth, 100));
    setNewSkill(prev => ({ ...prev, value: Math.round(newWidth) }));
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleAddSkill = () => {
    if (newSkill.name.trim() !== '') {
      const updatedSkills = [...skills, newSkill];
      setSkills(updatedSkills);
      setFormData((prevFormData) => ({
        ...prevFormData,
        profile: {
          ...prevFormData.profile,
          skills: updatedSkills,
        },
      }));
      setNewSkill({ name: '', value: 0 });
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    setFormData((prevFormData) => ({
      ...prevFormData,
      profile: {
        ...prevFormData.profile,
        skills: updatedSkills,
      },
    }));
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="input-style mb-20">
            <input
              className="font-sm color-text-paragraph-2"
              name="skill"
              placeholder="ex: React.js"
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            />
          </div>
        </div>

        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="box-progress-bar">
            <p className="font-xs color-text-paragraph mb-10">
              Arraste para o valor que pretender
            </p>
            <div
              className="progress cursor-pointer"
              ref={progressRef}
              onMouseDown={handleMouseDown}
            >
              <div
                className="progress-bar bg-paragraph-2 position-relative"
                role="progressbar"
                style={{ width: `${newSkill.value}%` }}
                aria-valuenow={newSkill.value}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <span style={{ top: '15px' }}>{newSkill.value}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <button
            className="btn-submit-register-form"
            type="button"
            onClick={handleAddSkill}
          >
            <i className="fa-solid fa-plus mr-5"></i> Adic.
          </button>
        </div>

        <div className="col-lg-12">
          <div className="row">
            {skills.length === 0 && (
              <div>Sem nenhuma competência adicionada.</div>
            )}
            {skills.map((skill, index) => (
              <div key={index} className="col-lg-6">
                <div className="skills-item">
                  <div className="skills-progress-bar">
                    <div className="box-progress-bar">
                    <p className="skills-item-label mb-10">
                      {skill.name}
                    </p>
                      <div className="progress">
                        <div
                          className="progress-bar bg-paragraph-2"
                          role="progressbar"
                          style={{ width: `${skill.value}%` }}
                          aria-valuenow={skill.value}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span>{skill.value}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button 
                    className="skills-remove-btn"
                    type="button"
                    onClick={() => handleRemoveSkill(index)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
