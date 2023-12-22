import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value;
      console.log('key pressed', keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  const logOut = () => {
    setAuthenticate(false);
  };

  return (
    <div className="nav">
      <div>
        <div
          className="login-button"
          onClick={goToLogin}
        >
          <FontAwesomeIcon icon={faUser} />
          {authenticate === true ? (
            <div onClick={logOut}>로그아웃</div>
          ) : (
            <div>로그인</div>
          )}
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="data:image/png;base64,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"
          alt="h&m로고"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            onKeyDown={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
