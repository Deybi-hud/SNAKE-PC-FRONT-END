import Input from '../atoms/Input.jsx';
import Button from '../atoms/Button.jsx';
import Icon from '../atoms/Icon.jsx';

export default function SearchBar({ value, onChange, onSubmit, placeholder = 'Buscar productos' }) {
    const submit = (e) => { e.preventDefault(); onSubmit?.(); };
    return (
        <form role="search" onSubmit={submit} style={{ display: 'flex', gap: 8, width: '100%' }}>
            <Input
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                placeholder={placeholder}
                aria-label="Buscar"
                style={{ flex: 1 }}
            />
            <Button type="submit" aria-label="Buscar"><Icon name="search" /> Buscar</Button>
        </form>
    );
}
