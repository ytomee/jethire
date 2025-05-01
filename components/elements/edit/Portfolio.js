'use client';

import { useState, useEffect } from 'react';

export default function Portfolio({ formData, setFormData }) {
    const [portfolio, setPortfolio] = useState([]);
    const [newItem, setNewItem] = useState({
        label: '',
        link: '',
        image: null,
    });
    
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (formData?.profile?.portfolio) {
            setPortfolio(formData.profile.portfolio);
        }
    }, [formData]);

    useEffect(() => {
        if (JSON.stringify(formData.profile.portfolio) !== JSON.stringify(portfolio)) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                profile: {
                    ...prevFormData.profile,
                    portfolio,
                },
            }));
        }
    }, [portfolio, formData, setFormData]);

    const handleAddItem = () => {
        if (newItem.label && newItem.link && newItem.image) {
            setPortfolio((prev) => [...prev, newItem]);
            setNewItem({ label: '', link: '', image: null });
        } else {
            alert('Por favor, preencha todos os campos');
        }
    };

    const handleRemoveItem = async (index) => {
        const itemToRemove = portfolio[index];

        if (itemToRemove?.image?.id) {
            try {
                await fetch('/api/delete-image', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ public_id: itemToRemove.image.id }),
                });
            } catch (error) {
                console.error('Erro ao apagar imagem do Cloudinary:', error);
            }
        }

        setPortfolio((prev) => prev.filter((_, i) => i !== index));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'portfolio');

            try {
                const response = await fetch('https://api.cloudinary.com/v1_1/dngcufwm8/image/upload', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                setNewItem({
                    ...newItem,
                    image: {
                        url: data.secure_url,
                        id: data.public_id
                    }
                });
            } catch (error) {
                console.error('Erro ao fazer upload da imagem:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="col-lg-12">
            <h4 className="mb-10">Portfolio</h4>
            <div className="row">
                <div className="col-lg-3">
                    <h6 className="mb-5">Legenda</h6>
                    <div className="input-style mb-20">
                        <input
                            name="label"
                            value={newItem.label}
                            onChange={handleInputChange}
                            className="font-sm color-text-paragraph-2"
                            placeholder="ex: Jet Hire"
                            type="text"
                        />
                    </div>
                </div>
                <div className="col-lg-3">
                    <h6 className="mb-5">Link</h6>
                    <div className="input-style mb-30">
                        <input
                            name="link"
                            value={newItem.link}
                            onChange={handleInputChange}
                            className="font-sm color-text-paragraph-2"
                            placeholder="ex: jethire.pt"
                            type="text"
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <h6 className="mb-5">Imagem</h6>
                    <div className="input-style mb-30">
                        <input
                            id="portfolio-image"
                            className="file-input"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="portfolio-image"
                            className="upload-label-pfp"
                            style={{ height: '50px', fontSize: '14px' }}
                        >
                            {isLoading ? (
                                <div className="spinner-border text-danger" role="status"></div>
                            ) : newItem.image ? 'Adicionado' : 'Fazer upload'}
                        </label>
                    </div>
                </div>
                <div className="col-lg-2">
                    <h6 className="mb-5">Adicionar</h6>
                    <button
                        className="btn-submit-register-form"
                        type="button"
                        onClick={handleAddItem}
                    >
                        <i className="fa-solid fa-plus mr-5"></i> Adic.
                    </button>
                </div>
            </div>

            <div className="row">
                {portfolio.map((item, index) => (
                    <div key={index} className="col-lg-4 mb-2">
                        <h6 className="custom-image-url">{item.link}</h6>
                        <div className="custom-image-wrapper">
                            <div className="custom-overlay">
                                <span
                                    className="custom-close-btn"
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </span>
                                <p className="custom-caption">{item.label}</p>
                            </div>
                            <img
                                src={item.image?.url}
                                alt="Imagem do portfólio"
                                className="custom-image"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
