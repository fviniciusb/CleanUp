// Arquivo: RegistrationForm.jsx

import React, { useState } from 'react';

// Passamos a função `closeModal` como uma prop para que o formulário possa se fechar
const RegistrationForm = ({ closeModal }) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Função para atualizar o estado quando o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Validação simples
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    if (formData.password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    // Se a validação passar:
    console.log("Dados do formulário enviados:", formData);
    alert("Cadastro realizado com sucesso! (Verifique o console)");

    // Em um aplicativo real, aqui você faria a chamada para sua API/backend
    
    closeModal(); // Fecha o modal após o sucesso
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-group">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn-primary submit-btn">Cadastrar</button>
    </form>
  );
};

export default RegistrationForm;