import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css'

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://fathomless-coast-33302.herokuapp.com/packages/add', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-package">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Place Name" />
                <input {...register("key")} placeholder="key" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("time")} placeholder="Time, Example : 2 Days / 1 Night" />
                <input {...register("cost")} placeholder="Cost" />
                <input {...register("image")} placeholder="Image-Tag" />

                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;