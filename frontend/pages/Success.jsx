import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const Success = () => {
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((prev) => {
        if (prev === 1) {
          clearInterval(intervalId);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <section className="success">
      <div className="success_card">
        <img src="/success.png" alt="Success" />

        <h1>Reservation Successful 🎉</h1>

        <p>
          Thank you for choosing our restaurant.  
          We look forward to serving you!
        </p>

        <p className="countdown">
          Redirecting to home in <strong>{countDown}</strong> seconds
        </p>

        <Link to="/" className="success_btn">
          Go to Home <span><HiOutlineArrowRight /></span>
        </Link>
      </div>
    </section>
  );
};

export default Success;
