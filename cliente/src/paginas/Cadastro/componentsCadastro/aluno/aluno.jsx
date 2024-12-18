import React from 'react';

function Aluno({ formData, handleChange }) {
    return (
        <div>
            <h4>Aluno</h4>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label>Código</label>
                    <input type="text" className="form-control" name="codigo" value={formData.codigo} onChange={handleChange} />
                </div>
                <div className="col-md-5">
                    <label>Nome</label>
                    <input type="text" className="form-control" name="nome" value={formData.nome} onChange={handleChange} />
                </div>
                <div className="col-md-5">
                    <label>CPF</label>
                    <input type="text" className="form-control" name="cpf" value={formData.cpf} onChange={handleChange} />
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-md-5">
                    <label>Logradouro</label>
                    <input type="text" className="form-control" name="logradouro" value={formData.logradouro} onChange={handleChange} />
                </div>
                <div className="col-md-2">
                    <label>Número</label>
                    <input type="text" className="form-control" name="numero" value={formData.numero} onChange={handleChange} />
                </div>
                <div className="col-md-5">
                    <label>Bairro</label>
                    <input type="text" className="form-control" name="bairro" value={formData.bairro} onChange={handleChange} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4">
                    <label>Cidade</label>
                    <input type="text" className="form-control" name="cidade" value={formData.cidade} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label>UF</label>
                    <input type="text" className="form-control" name="uf" value={formData.uf} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label>CEP</label>
                    <input type="text" className="form-control" name="cep" value={formData.cep} onChange={handleChange} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4">
                    <label>Data de Nascimento</label>
                    <input type="date" className="form-control" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label>Telefone</label>
                    <input type="text" className="form-control" name="telefone" value={formData.telefone} onChange={handleChange} />
                </div>
            </div>

            <div className="row mb-3">
                 <h4>Responsável</h4>

                 <div className="col-md-3">
                    <label>Nome</label>
                    <input type="text" className="form-control" name="responsavel" value={formData.responsavel} onChange={handleChange} />
                </div>
                <div className="col-md-3">
                    <label>CPF</label>
                    <input type="text" className="form-control" name="cpfr" value={formData.cpfr} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label>Telefone</label>
                    <input type="text" className="form-control" name="telefoner" value={formData.telefoner} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                </div>
            </div>
        </div>
    );
}

export default Aluno;