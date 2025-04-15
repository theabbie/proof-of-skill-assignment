"use client";

import CandidateComparison from "@/candidate-comparison";
import { useEffect, useState } from "react";

export default function SyntheticV0PageForDeployment() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <CandidateComparison />;
}
