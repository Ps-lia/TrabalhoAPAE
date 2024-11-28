import React from 'react';

function Especialidade({ formData, handleChange }) {
    return (
        <div>
            <h4>Especialidade</h4>

            <div className="row mb-3">
                <div className="col-md-3">
                    <label>Código</label>
                    <input
                        type="text"
                        className="form-control"
                        name="codigo"
                        value={formData.codigo}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-9">
                    <label>Especialidade</label>
                    <input
                        type="text"
                        className="form-control"
                        name="especialidade"
                        value={formData.especialidade}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Especialidade;