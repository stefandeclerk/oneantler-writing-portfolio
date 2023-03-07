const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <p>{submenu.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
