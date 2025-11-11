const Checkbox = ({ id, label, ...props }) => (
    <label htmlFor={id} className="checkbox">
        <input type="checkbox" id={id} {...props} /> {label}
    </label>
);
