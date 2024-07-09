
import React, { useState } from 'react';
import LoginButton from './LoginButton';
import Button from './Button';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ isOpen, onClose }) => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      console.log('Login successful!');
      onClose();


    } else {
      console.log('Please fill in both username and password fields.');
    }
  };


  return (
    <div>
     
      <LoginButton onClick={handleOpenModal} />
  

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div onClick={handleCloseModal} className="float-end">
              <Button
                type="button"
                title="Close"
                icon="/close.svg"
                variant="btn_dark_green"
              />
            </div>
            <div className="mx-24">
              <form onSubmit={handleLogin} className="flex flex-col items-center mt-4">
                <div className="input-group">
                  <label className="regular-24 bold-40" htmlFor="username">
                    Username:
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="input-field"
                    />
                  </label>
                </div>
                <div className="input-group">
                  <label className="regular-24 bold-40" htmlFor="password">
                    Password:
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-field"
                    />
                  </label>
                </div>

                <div className="float-end mt-6">
                  <Button type="submit" title="Login" variant="btn_dark_green" />
                </div>
              </form>
            </div>

          </div>
        </div>
      )}
      
    </div>
    
  );
};

export default Login;