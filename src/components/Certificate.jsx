import React, { useRef, useState } from "react";
import CertificateImage from "../images/certificate-01.png";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

export default function Certificate() {
  const navigate = useNavigate();
  const show = useState(true);
  const name = useSelector((state) => state.nameReducer);
  const data = useSelector((state) => state.resultReducer);
  if (name.name === "") {
    navigate("/");
    return <h1 className="text-center mt-[20rem] text-2xl">Login first to access this page.</h1>;
  }
  const certificateRef = useRef(null);

  const handleDownloadCertificate = () => {
    const certificateDiv = certificateRef.current;

    html2canvas(certificateDiv).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");

      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center max-w-7xl mx-auto">
      <div className="absolute -z-10 mb-16">
        <div
          ref={certificateRef}
          className="h-[438px] w-[615px] scale-[0.45]  sm:scale-[1]  relative flex flex-col justify-between bg-white border shadow-sm rounded-lg p-2"
        >
          <img src={CertificateImage} className="h-full" alt="certificate" />
          <h1
            className="absolute top-[220px] left-[50%] text-[23px] font-bold scale-y-[1.3] -translate-x-[50%] text-slate-700"
            style={{ top: "200px" }}
          >
            {name.name}
          </h1>
          <h1
            className="absolute bottom-[102px] text-2xl text-slate-700 left-[232px]"
            style={{ bottom: "112px" }}
          >
            {data.wpm}
          </h1>
          <h1
            className="absolute bottom-[102px] text-2xl text-slate-700 right-[167px]"
            style={{ bottom: "112px" }}
          >
            {data.accuracy}
          </h1>
          <h1
            className="absolute bottom-[65px] text-lg text-slate-700 left-[75px]"
            style={{ bottom: "75px" }}
          >
            {new Date().getDate() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getFullYear()}
          </h1>
        </div>
      </div>

      <div className="h-[438px] w-[615px] scale-[0.45] sm:scale-[1] relative flex flex-col justify-between bg-white border shadow-sm rounded-lg p-2">
        <img src={CertificateImage} className="h-full" alt="certificate" />
        <h1
          className="absolute top-[220px] left-[50%] text-[23px] font-bold scale-y-[1.3] -translate-x-[50%] text-slate-700"
          style={{ top: show ? "220px" : "200px" }}
        >
          {name.name}
        </h1>
        <h1
          className="absolute bottom-[102px] text-2xl text-slate-700 left-[232px]"
          style={{ bottom: show ? "102px" : "112px" }}
        >
          {data.wpm}
        </h1>
        <h1
          className="absolute bottom-[102px] text-2xl text-slate-700 right-[167px]"
          style={{ bottom: show ? "102px" : "112px" }}
        >
          {data.accuracy}
        </h1>
        <h1
          className="absolute bottom-[65px] text-lg text-slate-700 left-[75px]"
          style={{ bottom: show ? "65px" : "75px" }}
        >
          {new Date().getDate() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getFullYear()}
        </h1>
      </div>
      <h1
        className="bg-yellow-300 mt-5 rounded-full px-5 py-2 w-fit self-center text-xl cursor-pointer hover:shadow-md"
        onClick={handleDownloadCertificate}
      >
        Download
      </h1>
    </div>
  );
}
