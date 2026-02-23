import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../api/api";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {
    const reference = params.get("reference");

    if (reference) {
      api.get(`/payments/verify/${reference}`)
        .then(() => {
          alert("Payment successful! Coins added.");
          navigate("/dashboard");
        })
        .catch(() => {
          alert("Verification failed");
        });
    }
  }, []);

  return <div>Verifying payment...</div>;
              }
