import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Jaga Rumah kini dilebur ke halaman "Home Service" bersama Cleaning,
// Potong Rumput (yang telah menjadi Digital Marketing), dan Service AC
// (yang telah menjadi Property Investment).
export default function JagaRumahPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/layanan/home-service", { replace: true });
  }, [navigate]);
  return null;
}
