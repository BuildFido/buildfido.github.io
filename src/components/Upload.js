import React, { useState } from 'react';
import { Button } from "reactstrap";
import axios from 'axios';
import ResponseCard from './ResponseCard';

function Upload() {
    const [file, setFile] = useState(null);
    const [removedCols, setRemovedCols] = useState([]);
    const [modifiedCols, setModifiedCols] = useState([]);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onUpload = async () => {
        const formData = new FormData();
        formData.append('csv', file);
        document.getElementById('loading').style.display = 'block';
        document.getElementById('header').style.display = 'none';
        localStorage.setItem('file', formData);

        try {
            await axios.post('http://127.0.0.1:8000/upload_metadata/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => response.data)
            .then(data => {
                setModifiedCols(data['modified']);
                console.log(modifiedCols)
                setRemovedCols(data['removed']);
                if (data['modified'].length > 0 || data['removed'].length > 0){
                    return axios.post('http://127.0.0.1:8000/upload/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    })
                }
                else {
                    document.getElementById('loading').style.display = 'none';
                    document.getElementById('header').style.display = 'block';
                    document.getElementById('info').style.display = 'none';
                    document.getElementById('response').style.display = 'block';
                    return;
                }
            }).then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const a = document.createElement('a');
                a.href = url;
                a.setAttribute('download', 'de-identified.csv');  // The desired file name
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('There was a problem with the axios operation:', error.message);
            });
        } catch (error) {
            console.error('Error uploading file:', error);
        }
        document.getElementById('loading').style.display = 'none';
        document.getElementById('header').style.display = 'block';
        document.getElementById('info').style.display = 'none';
        document.getElementById('response').style.display = 'block';
    };

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input class='form-control' style={{ maxWidth: "400px", marginRight: '10px', alignItems: 'center' }} type="file" accept=".csv" onChange={onFileChange} />
                <Button
                    color="primary"
                    className="float-right"
                    style={{ minWidth: "200px" }}
                    onClick={onUpload}
                >Upload and Obtain De-identified Data</Button>
            </div>
            <ResponseCard removedCols={removedCols} modifiedCols={modifiedCols}/>
        </>
    );
}

export default Upload;
