import { useState } from "react";
import api from "../api";
import Navbar from "./Navbar";

function CreateDog() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [availableForAdoption, setAvailableForAdoption] = useState(false);
    const [uploadFile, setUploadFile] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleFileChange = (event) => {
        setUploadFile(event.target.files[0]);
    };

    const createDog = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("breed", breed);
        formData.append("age", age);
        formData.append("description", description);
        formData.append("available_for_adoption", availableForAdoption);
        formData.append("image", uploadFile);
        formData.append("phone_number", phoneNumber);

        try {
            const res = await api.post("/api/notes/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.status === 201) {
                alert("Dog created!");
            } else {
                alert("Failed to create dog.");
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
    
            <div style={{ 
            backgroundImage: "url('https://i.pinimg.com/originals/37/1f/db/371fdbaaeddc587ddd4781a2297c5279.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            
            <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px',color:'black'}}>
                
                <h2 style={{ marginBottom: '20px' }}>Create a Dog</h2>
                <form onSubmit={createDog} encType="multipart/form-data">
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
                    />

                    <label htmlFor="breed" style={{ display: 'block', marginBottom: '5px' }}>Breed:</label>
                    <input
                        type="text"
                        id="breed"
                        name="breed"
                        required
                        onChange={(e) => setBreed(e.target.value)}
                        value={breed}
                        style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
                    />

                    <label htmlFor="age" style={{ display: 'block', marginBottom: '5px' }}>Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        required
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
                    />

                    <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
                    ></textarea>

                    <label htmlFor="available_for_adoption" style={{ display: 'block', marginBottom: '5px' }}>Available for Adoption</label>
                    <input
                        type="checkbox"
                        id="available_for_adoption"
                        name="available_for_adoption"
                        onChange={(e) => setAvailableForAdoption(e.target.checked)}
                        checked={availableForAdoption}
                    />

                    <label htmlFor="phone_number" style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
                    <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
                    />
                    <small style={{ display: 'block', marginTop: '5px' }}>Format: 123-456-7890</small>

                    <label htmlFor="file" style={{ display: 'block', marginBottom: '5px' }}>Select an Image:</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        required
                        onChange={handleFileChange}
                        style={{ marginBottom: '20px' }}
                    />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
        </div>
    );
}

export default CreateDog;
