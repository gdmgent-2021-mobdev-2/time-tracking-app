import { useState, useEffect } from 'react';
import Input from '../../../../../Design/Input';
import { formatMinutesToString } from '../../../../../../core/modules/logs/utils';

const TimeInput = ({ value, name, onChange, ...rest }) => {
    const [time, setTime] = useState(value ? formatMinutesToString(value) : '');

    const handleBlur = (e) => {
        const current = e.target.value;
        const parts = current.split(':');
        let hours = parts.length > 1 ? parseInt(parts[0]) : 0;
        let minutes = parseInt(parts[parts.length > 1 ? 1 : 0]);
        // call onchange, the value will be changed and useEffect will call "setTime"
        onChange({
            target: {
                name: name,
                value: (hours * 60) + minutes,
            }
        })
    };

    useEffect(() => {
        setTime(formatMinutesToString(value));
    }, [value]);

    return (
        <Input
            value={time}
            name={name}
            onBlur={handleBlur}
            onChange={(e) => setTime(e.target.value)}
            {...rest}
            />
    )

};

export default TimeInput;
