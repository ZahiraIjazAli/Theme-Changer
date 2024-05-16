
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
    return (
        <div>

           <span>I accept the Terms of privacy</span><Checkbox {...label}  />

        </div>
    );
}