import { useEffect, useState } from 'react';
import { useMovieDataMutate } from '../../hooks/useMovieDataMutate';
import { MovieData } from '../../interface/MovieData';
import axios, { AxiosPromise } from "axios"

import "./modal.css";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const API_URL = `${baseURL}/movie/uploadImage`;

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [release_year, setReleaseYear] = useState(0);
    const [description, setDescription] = useState("");
    // const [image, setImage] = useState("");
    const [imageData, setImageData] = useState<File | null>(null);
    const { mutate, isSuccess, isLoading } = useMovieDataMutate();

    function handleFileChange (e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.files != null){
            setImageData(e.target.files[0])
        }
    };

    const submit = () => {
        const form = new FormData();
        if(imageData){
            form.append("file", imageData)
        }
        axios.post(API_URL, form)
            .then((response) => {
               
                console.log(response.data);
                var image = response.data;
                // console.log("tentativa de pegar a url: " + image)
                const foodData: MovieData = {
                    title, 
                    release_year,
                    description,
                    image
                }
                mutate(foodData)
            });
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Register a new Movie</h2>
                <form className="input-container">
                    <Input label="Title" value={title} updateValue={setTitle}/>
                    <Input label="Release Year" value={release_year} updateValue={setReleaseYear}/>
                    <Input label="Description" value={description} updateValue={setDescription}/>
                    <input type="file" name="movieImage" required onChange={handleFileChange} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}