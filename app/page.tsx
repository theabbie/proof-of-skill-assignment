"use client";

import CandidateComparison from "@/candidate-comparison";
import { useEffect, useState } from "react";
import { fetchCandidateList, type Candidate } from "@/hooks/useCandidateList";
import { Skeleton } from "@/components/ui/skeleton";

export default function SyntheticV0PageForDeployment() {
  const [isMounted, setIsMounted] = useState(false);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCandidateList();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setError("Failed to load candidates. Please try again later.");
      } finally {
        setIsLoading(false);
        setIsMounted(true);
      }
    };
    loadCandidates();
  }, []);

  if (!isMounted) {
    return null;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-8 space-y-4">
        <Skeleton className="h-8 w-[200px]" />
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return <CandidateComparison candidates={candidates} />;
}