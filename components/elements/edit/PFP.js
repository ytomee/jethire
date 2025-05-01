'use client';

export default function PFP({ formData, setFormData }) {

    const handlePFPChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.split(",")[1];
            setFormData((prev) => ({
            ...prev,
            pfp: base64String,
            }));
        };
        reader.readAsDataURL(file);
    };
    
    return(
        <div className="input-style mb-20">

            <input 
                id="pfp-upload" 
                className="file-input" 
                name="pfp" 
                type="file" 
                accept="image/*" 
                onChange={handlePFPChange}
                style={{ display: "none" }} 
            />

            <label htmlFor="pfp-upload" className="upload-label-pfp">
            {formData.profile?.pfp || formData.pfp ? (
                <img
                src={
                    formData.pfp
                    ? formData.pfp.startsWith("data:") || formData.pfp.startsWith("http")
                        ? formData.pfp
                        : `data:image/jpeg;base64,${formData.pfp}`
                    : formData.profile.pfp
                }
                alt="Foto de perfil"
                className="upload-label-image"
                />
            ) : (
                <div className="font-sm color-text-paragraph-2 d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-plus mr-5"></i> Fazer upload
                </div>
            )}
            </label>

        </div>
    );
}