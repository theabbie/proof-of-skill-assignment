
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { type Candidate } from "@/hooks/useCandidateList";
import { fetchCandidateSkills } from "@/hooks/useCandidateSkills";

interface CandidateComparisonProps {
  candidates: Candidate[];
}

export default function CandidateComparison({
  candidates,
}: CandidateComparisonProps) {
  const [activeTab, setActiveTab] = useState("compare");
  const [activeCandidates, setActiveCandidates] = useState<Set<string>>(new Set());

  const getSkillColor = (level: number) => {
    if (level >= 4) return "bg-green-500";
    if (level >= 3) return "bg-green-300";
    if (level >= 2) return "bg-yellow-200";
    return "bg-yellow-100";
  };

  const toggleCandidate = async (id: string) => {
    const newActiveCandidates = new Set(activeCandidates);
    if (newActiveCandidates.has(id)) {
      newActiveCandidates.delete(id);
    } else {
      newActiveCandidates.add(id);
      const skills = await fetchCandidateSkills(id);
      console.log('Candidate skills:', id, skills);
    }
    setActiveCandidates(newActiveCandidates);
  };

  const skills = [
    "Experience",
    "Can join in",
    "Minimum salary expected",
    "Creating Wireframes",
    "Creating Basic Prototypes",
    "Creation of Brands",
    "Applying Color Theory",
    "Using Figma for Design",
    "Application of Typography",
    "Creating Effective Icons",
    "Optimizing Touch Points",
    "Addressing User Pain Points",
    "Conducting User Research",
    "Applying Questioning Skills",
    "Conducting Heuristic Evaluation",
    "Gathering User Feedback",
    "Conducting Usability Tests",
    "Creating User Personas",
    "Conducting Market Research",
    "Crafting Effective Questions",
    "Creating Effective Surveys",
    "Creating Sitemaps",
    "Designing User Flows",
  ];

  const activeCandidatesList = candidates.filter(c => activeCandidates.has(c.id));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="border-b">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="#"
            className="inline-flex items-center text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to My Jobs
          </Link>
        </div>
      </div>

      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl text-gray-500 font-normal">
            Posk_UXdesigner_sr001
          </h1>
          <div className="text-gray-500">{candidates.length} Candidates</div>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="w-[200px] border-r">
          <div className="p-4 border-b">
            <h2 className="font-medium">Most recommended</h2>
          </div>
          <div className="border-t border-gray-100">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50"
              >
                <Avatar className="h-8 w-8 bg-gray-200 text-gray-600 mr-3"></Avatar>
                <div className="text-sm">{candidate.name}</div>
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-auto h-6 w-6 rounded-full"
                  onClick={() => toggleCandidate(candidate.id)}
                >
                  {activeCandidates.has(candidate.id) ? "-" : "+"}
                </Button>
              </div>
            ))}
          </div>
          <div className="p-4 text-xs text-gray-500">
            Recommendations are based on your skill requirements and candidate's
            performance.
          </div>
        </div>

        <div className="flex-1 overflow-x-auto">
          <div className="flex border-b">
            <button
              className={`px-4 py-3 ${activeTab === "compare" ? "bg-green-600 text-white" : "bg-white text-gray-700"}`}
              onClick={() => setActiveTab("compare")}
            >
              Compare View
            </button>
            <button
              className={`px-4 py-3 ${
                activeTab === "individual"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab("individual")}
            >
              Individual view
            </button>
            <button
              className={`px-4 py-3 ${
                activeTab === "shortlisted"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab("shortlisted")}
            >
              Shortlisted candidates
            </button>
            <div className="ml-auto flex items-center pr-4">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded border-gray-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded border-gray-300 ml-1"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-[250px] sticky left-0 bg-white z-10"></th>
                  {activeCandidatesList.map((candidate) => (
                    <th
                      key={candidate.id}
                      className="text-center p-2 text-xs font-normal"
                    >
                      {candidate.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, skillIndex) => (
                  <tr
                    key={skillIndex}
                    className={skillIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="p-2 text-sm sticky left-0 bg-inherit z-10 border-r">
                      {skill}
                    </td>
                    {activeCandidatesList.map((candidate) => {
                      const skillLevel = candidate.skills
                        ? candidate.skills[skillIndex - 3] || 0
                        : 0;
                      return (
                        <td key={candidate.id} className="p-0">
                          <div
                            className={`w-full h-8 ${getSkillColor(skillLevel)}`}
                          ></div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
