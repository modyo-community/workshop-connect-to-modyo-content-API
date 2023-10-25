import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Detalles = () => {
    let { id } = useParams()

    const [data, setData] = useState();


    
    const url = 'https://advocate.modyo.cloud/api/content/spaces/'
    const space = 'workshop-content'
    const type = '/types/evento/entries/';

    useEffect(() => {
        fetch(url + space + type + id)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>



            {data &&

                <div>
                    <h2>{data.meta.name}</h2>
                    <p>
                        {data.fields.contenido}
                    </p>
                    <img src={data.fields.imagen.url} className="card-img-top" alt={data.fields.imagen.title} />

                </div>


            }

        </>
    )
}

export default Detalles