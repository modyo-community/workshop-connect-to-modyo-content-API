import React, { useState, useEffect } from 'react';


function Noticias() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://advocate.modyo.cloud/api/content/spaces/workshop-content/types/evento/entries')
            .then(response => response.json())
            .then(data => setData(data.entries))
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='row'>
            {data.map(item => (

                <div key={item.meta.uuid} className='col-4'>
                    <div className="card"  >
                        <img src={item.fields.imagen.url} className="card-img-top" 
                        alt={item.fields.imagen.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.meta.name}</h5>
                            <p className="card-text">
                                {item.fields.resumen}
                            </p>
                            <a href={`/detalles/${item.meta.uuid}`} className="btn btn-primary">Ver {item.meta.type}</a>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default Noticias;