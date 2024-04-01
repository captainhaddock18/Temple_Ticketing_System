import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import QRCode from 'react-qr-code'; // Import QRCode component
import './ticket.css'
export default function ETicketPage() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Retrieve form data from local storage
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const generatePDF = () => {
    const input = document.getElementById('e-ticket-content'); // Assuming the content you want to convert to PDF is wrapped inside an element with id 'e-ticket-content'

    // Convert HTML content to canvas using html2canvas
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();

      // Calculate dimensions to fit the PDF page
      const imgWidth = 210; // A4 page width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      const pdfBase64 = btoa(pdf.output()); // Convert PDF output to Base64 string

      // Generate QR code with PDF Base64 string as content
      const qrDataUrl = `data:image/png;base64,${pdfBase64}`;
      const qrImg = document.createElement('img');
      qrImg.src = qrDataUrl;
      document.body.appendChild(qrImg);

      // Download PDF
      pdf.save('e-ticket.pdf');
    });
  };

  return (
    <div className="centered">
      <h1 className="typewriter">E-Ticket</h1>
      <div id="e-ticket-content">
        {formData && (
          <div>
            <p className="typewriter">Name: {formData.name}</p>
            <p className="typewriter">Email: {formData.email}</p>
            <p className="typewriter">Phone: {formData.phone}</p>
            <p className="typewriter">Temple: {formData.temple}</p>
            <p className="typewriter">Date: {formData.date}</p>
            <p className="typewriter">People: {formData.people}</p>
            <p className="typewriter">Time: {formData.startHour}:{formData.startMinute}</p>
            {/* Display other form data fields as needed */}
          </div>
        )}
      </div>
      <QRCode value={JSON.stringify(formData)} /> {/* Render QR code with form data */}
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
  




}

