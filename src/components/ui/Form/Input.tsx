import { FieldWrapper } from './FieldWrapper';
import { Label } from './Label';

export type InputProps = {
  className?: string;
  type?: string;
  label?: string;
  id: string;
};

const Input = ({ className = '', type = 'text', label, id }: InputProps) => {
  const defaultClasses = 'input input-bordered';

  return (
    <FieldWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        className={`${className} ${defaultClasses}`.trim()}
        type={type}
        id={id}
      />
    </FieldWrapper>
  );
};

export { Input };
