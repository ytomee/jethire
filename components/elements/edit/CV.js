'use client';

export default function CV({ formData, setFormData }) {

    const handleCVChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.split(",")[1];
            setFormData((prev) => ({
            ...prev,
            cv: base64String,
            }));
        };
        reader.readAsDataURL(file);
    };
    
    
    return(
        <div className="input-style mb-20">
            <input 
                id="cv-upload" 
                className="file-input" 
                name="cv" 
                type="file" 
                accept="image/*" 
                onChange={handleCVChange}
                style={{ display: "none" }} 
            />
            <label 
                htmlFor="cv-upload" 
                className="upload-label font-sm color-text-paragraph-2 d-flex align-items-center justify-content-center"
            >
            {formData.profile?.cv || formData.cv ? (
                <>
                    Adicionado
                </>
            ) : (
                <>
                    <i className="fa-solid fa-plus mr-5"></i> 
                    Fazer upload 
                </>
            )}
            </label>
        </div>
    );
}