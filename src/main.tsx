import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./effects/kage-landing-page/styles.css";
const KageLandingPage = lazy(() => import("./effects/kage-landing-page/KageLandingPage").then(m => ({ default: m.KageLandingPage })));
createRoot(document.getElementById("root")!).render(<div className="effect-frame"><Suspense fallback={<div className="loading">Kage</div>}><KageLandingPage headingFont="onest" bodyFont="onest" headingWeight="400" bodyWeight="300" primaryColor="#e0231c" headingSize={46} bodySize={17} headingLetterSpacing={-0.012}/></Suspense></div>);