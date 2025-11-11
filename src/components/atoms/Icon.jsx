const Icon = ({ name, size = 20, color = 'currentColor' }) =>
    <i className={`bi bi-${name}`} style={{ fontSize: size, color }}></i>;
export default Icon;
