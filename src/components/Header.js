import Button from './Button';

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>
        TO <span style={{ color: 'crimson' }}>DO</span> LIST
      </h1>

      <Button
        bcolor={showAdd ? 'crimson' : '#152D35'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
        color={showAdd ? '#152D35' : 'crimson'}
      />
    </header>
  );
};

// CSS in JS
// const headerStyle = {
//   color: 'red',
//   backgroundColor: 'crimson',
// };

export default Header;
