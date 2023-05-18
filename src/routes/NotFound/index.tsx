import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, seconds * 1000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate, seconds]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      404 - Not Found
      <br />
      Page not found, going to home... {seconds}
    </div>
  );
}
