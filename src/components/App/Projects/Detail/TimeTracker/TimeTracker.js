import { useState, useEffect, useRef } from 'react';
import Button from '../../../../Design/Button';
import Input from '../../../../Design/Input';

const TimeTracker = () => {
    const [hours, setHours] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleHoursChange = (e) => {
        setHours(e.target.value);
    };

    const handleMinClick = () => {

    };

    const handlePlusClick = () => {

    };

    return (
        <form>
            <div className="d-flex">
                <Button color="secondary" onClick={handleMinClick}>-</Button>
                <Input type="number"
                       ref={inputRef}
                       value={hours}
                       onChange={handleHoursChange}
                       name="hours" />
                <Button color="secondary" onClick={handlePlusClick}>+</Button>
            </div>

            <Button type="submit">Save</Button>
        </form>
    )

};

export default TimeTracker;
