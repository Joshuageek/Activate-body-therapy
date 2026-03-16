import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BecomeAMember = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Don't show on the Usawa page
  if (!show || location.pathname === "/usawa") return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <div className="relative w-20 h-20">
        {/* Outer pulse ring */}
        <span
          className="
            absolute inset-0
            rounded-full
            bg-usawa-green-soft
            opacity-25
            animate-ping
            pointer-events-none
          "
        />

        {/* Button */}
        <Link
          to="/membership"
          className="
            relative z-10
            flex flex-col items-center justify-center
            w-20 h-20
            rounded-full
            bg-usawa-green-soft/20
            backdrop-blur-md
            border border-white/20
            text-usawa-green
            shadow-xl
            transition-all duration-300 ease-out
            hover:scale-110 hover:shadow-2xl
          "
        >
          <span className="text-[12px] font-semibold leading-tight">
            Join
          </span>
          <span className="text-[12px] font-semibold leading-tight">
            Now
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BecomeAMember;
