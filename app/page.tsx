"use client";

import CandidateComparison from "@/candidate-comparison";
import { useEffect, useState } from "react";
import { fetchCandidateList } from "@/hooks/useCandidateList";

export default function SyntheticV0PageForDeployment() {
  const [isMounted, setIsMounted] = useState(false);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setIsMounted(true);
    const loadCandidates = async () => {
      try {
        const data = await fetchCandidateList();
        console.log("Candidate List:", data);
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    loadCandidates();
  }, []);

  if (!isMounted) {
    return null;
  }

  return <CandidateComparison />;
}
