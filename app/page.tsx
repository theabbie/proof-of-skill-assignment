
"use client";

import CandidateComparison from "@/candidate-comparison";
import { useEffect, useState } from "react";
import { fetchCandidateList, type Candidate } from "@/hooks/useCandidateList";

export default function SyntheticV0PageForDeployment() {
  const [isMounted, setIsMounted] = useState(false);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const data = await fetchCandidateList();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
      setIsMounted(true);
    };
    loadCandidates();
  }, []);

  if (!isMounted) {
    return null; // Return null on server-side and first client render
  }

  return <CandidateComparison candidates={candidates} />;
}
