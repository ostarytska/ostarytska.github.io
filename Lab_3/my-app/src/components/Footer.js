import React from 'react';

function Footer({ backgroundColor  }) {
  const style = {
    backgroundColor,
    color: 'white',
    textAlign: 'center',
    padding: '15px 0',
  };

  return (
    <footer style={style}>
      <div className="contact-info">
        <p>Телефон: +380 (99) 123-45-67</p>
        <p><a href="#" style={{ color: 'white' }}>Instagram: instagram</a></p>
        <p><a href="#" style={{ color: 'white' }}>Telegram: Telegram</a></p>
      </div>
      <p>© 2025 MyApp</p>
    </footer>
  );
}

export default Footer;
