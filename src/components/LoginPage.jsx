import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const sendCode = async () => {
    try {
      await axios.post("http://localhost:5000/send-code", { phone });
      setStep(2);
      setMessage("✅ Código enviado. Revisa tu SMS.");
    } catch (error) {
      setMessage("❌ Error al enviar código.");
    }
  };

  const verifyCode = async () => {
    try {
      const res = await axios.post("http://localhost:5000/verify-code", {
        phone,
        code,
      });
      if (res.data.status === "approved") {
        setMessage("✅ Verificación exitosa. Redirigiendo...");
        // Aquí rediriges al dashboard o activas acceso
      } else {
        setMessage("❌ Código incorrecto.");
      }
    } catch (err) {
      setMessage("❌ Error al verificar código.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Iniciar sesión vía SMS</h2>

      {step === 1 && (
        <>
          <input
            type="tel"
            placeholder="+51912345678"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 rounded mb-4 w-full max-w-xs"
          />
          <button
            onClick={sendCode}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Enviar código
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Ingresa el código"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border p-2 rounded mb-4 w-full max-w-xs"
          />
          <button
            onClick={verifyCode}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Verificar
          </button>
        </>
      )}

      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
  );
}

export default LoginPage;
