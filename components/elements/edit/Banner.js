'use client';

export default function Banner({ formData, setFormData }) {

    const handleBannerChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.split(",")[1];
            setFormData((prev) => ({
            ...prev,
            banner: base64String,
            }));
        };
        reader.readAsDataURL(file);
    };
    
    return(
        <div className="input-style mb-20">
            <input 
                id="banner-upload" 
                className="file-input" 
                name="banner" 
                type="file" 
                accept="image/*" 
                onChange={handleBannerChange}
                style={{ display: "none" }} 
            />

            <label 
                htmlFor="banner-upload"
                className="upload-label-pfp text-sm color-text-paragraph-2 d-flex align-items-center justify-content-center"
            >
            {formData.profile?.banner || formData.banner ? (
                <img
                src={
                    formData.banner
                    ? formData.banner.startsWith("data:") || formData.banner.startsWith("http")
                        ? formData.banner
                        : `data:image/jpeg;base64,${formData.banner}`
                    : formData.profile.banner
                }
                alt="Foto de fundo"
                className="upload-label-image"
                />
            ) : (
                <>
                    <i className="fa-solid fa-plus mr-5"></i> Fazer upload
                </>
            )}
            </label>
        </div>
    );
}