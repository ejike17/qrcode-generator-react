import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} id="input" />
      <button onClick={handleQrCode} disabled={input ? false : true}>
        Generate Code
      </button>
      <section className="qr-code-container">
        {<QRCode value={qrCode} size={400} bgColor="white" />}
      </section>
    </div>
  );
}
