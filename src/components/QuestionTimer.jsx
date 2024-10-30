import { useState, useEffect } from "react";

export default function QuestionTimer({ TIMER, onTimeout, mode }) {
    const [timeRemaining, setTimeRemaining] = useState(TIMER);

    useEffect(() => {
        const timer = setTimeout(onTimeout, TIMER);

        return () => {
            clearTimeout(timer);
        };
    }, [onTimeout, TIMER]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress
        id="progress-time"
        value={timeRemaining}
        max={TIMER}
        className={mode} />
};