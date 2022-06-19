import Calendar from '../components/Calendar/Calendar';
import TimeRange from '../components/TimeRange/TimeRange';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function CreateMeetupPage() {
    const CalendarRef = useRef();
    const TimeRangeRef = useRef();
    const navigate = useNavigate();
    //create a function such that when button outside here is pressed, it will
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function createCode() {
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        console.log(code);
        // const payload = {};
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify()
        // };
    }
    return (
        <div>
            <TimeRange ref={TimeRangeRef} />
            <Calendar ref={CalendarRef} />
            <button
                onClick={() => {
                    CalendarRef.current.storeSelectedList();
                    TimeRangeRef.current.storeRange();
                    navigate('../select');
                }}>
                submit
            </button>
            <button onClick={createCode}></button>
        </div>
    );
}