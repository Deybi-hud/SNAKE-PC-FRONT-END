const Select = ({ options, ...props }) => (
    <select {...props}>
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </select>
);
