import React from 'react';
import Button from './Button';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {


  return (
    <div onClick={onClick} className="float-end">
      <Button
        type="button"
        title="Login/Sign-up"
        icon="/user.svg"
        variant="btn_dark_green"
      />
      
    </div>
    
  );
};

export default LoginButton;