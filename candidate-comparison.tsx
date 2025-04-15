"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import Link from "next/link"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function CandidateComparison() {
  const [activeTab, setActiveTab] = useState("compare")

  // Skill proficiency color mapping
  const getSkillColor = (level: number) => {
    if (level >= 4) return "bg-green-500"
    if (level >= 3) return "bg-green-300"
    if (level >= 2) return "bg-yellow-200"
    return "bg-yellow-100"
  }

  // Sample data for the comparison matrix
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
  ]

  // Sample candidate data
  const candidates = [
    {
      id: 1,
      score: 3.5,
      joinIn: 6,
      salary: 12,
      skills: [3, 4, 3, 2, 4, 3, 2, 3, 4, 2, 1, 4, 3, 2, 3, 4, 3, 2, 4, 3, 2],
    },
    { id: 2, score: 15, joinIn: 5, salary: 8, skills: [2, 3, 4, 3, 2, 4, 3, 2, 1, 3, 4, 2, 3, 4, 2, 3, 4, 3, 2, 3, 4] },
    { id: 3, score: 50, joinIn: 3, salary: 7, skills: [4, 2, 3, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2] },
    { id: 4, score: 4, joinIn: 2, salary: 3, skills: [3, 4, 2, 3, 4, 2, 3, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3] },
    {
      id: 5,
      score: 7,
      joinIn: 15,
      salary: 50,
      skills: [2, 3, 4, 2, 3, 4, 2, 3, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4],
    },
    { id: 6, score: 9, joinIn: 7, salary: 9, skills: [4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2] },
    {
      id: 7,
      score: 0,
      joinIn: 10,
      salary: 15,
      skills: [3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4],
    },
    { id: 8, score: 0, joinIn: 4, salary: 8, skills: [2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3] },
    { id: 9, score: 1, joinIn: 8, salary: 12, skills: [4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2] },
    {
      id: 10,
      score: 5.8,
      joinIn: 8,
      salary: 14,
      skills: [3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4],
    },
    { id: 11, score: 2, joinIn: 6, salary: 6, skills: [2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3] },
    { id: 12, score: 3, joinIn: 0, salary: 0, skills: [4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2] },
    {
      id: 13,
      score: 3,
      joinIn: 12,
      salary: 15,
      skills: [3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4],
    },
    {
      id: 14,
      score: 5,
      joinIn: 15,
      salary: 17,
      skills: [2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3],
    },
    {
      id: 15,
      score: 6,
      joinIn: 20,
      salary: 25,
      skills: [4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2],
    },
    {
      id: 16,
      score: 0,
      joinIn: 89,
      salary: 100,
      skills: [3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4],
    },
  ]

  // Recommended candidates
  const recommendedCandidates = [
    { id: 1, name: "Abhishek trivedi" },
    { id: 2, name: "Abhishek trivedi" },
    { id: 3, name: "Abhishek trivedi" },
    { id: 4, name: "Abhishek trivedi" },
    { id: 5, name: "Abhishek trivedi" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-3">
          <Link href="#" className="inline-flex items-center text-gray-500 hover:text-gray-700">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to My Jobs
          </Link>
        </div>
      </div>

      {/* Job title and candidate count */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl text-gray-500 font-normal">Posk_UXdesigner_sr001</h1>
          <div className="text-gray-500">23 Candidates</div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-[200px] border-r">
          <div className="p-4 border-b">
            <h2 className="font-medium">Most recommended</h2>
          </div>
          <div className="border-t border-gray-100">
            {recommendedCandidates.map((candidate) => (
              <div key={candidate.id} className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50">
                <Avatar className="h-8 w-8 bg-gray-200 text-gray-600 mr-3">
                  <div className="text-xs">AT</div>
                </Avatar>
                <div className="text-sm">{candidate.name}</div>
                <Button variant="ghost" size="icon" className="ml-auto h-6 w-6 rounded-full">
                  <Info className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            ))}
          </div>
          <div className="p-4 text-xs text-gray-500">
            Recommendations are based on your skill requirements and candidate's performance.
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-x-auto">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`px-4 py-3 ${activeTab === "compare" ? "bg-green-600 text-white" : "bg-white text-gray-700"}`}
              onClick={() => setActiveTab("compare")}
            >
              Compare View
            </button>
            <button
              className={`px-4 py-3 ${
                activeTab === "individual" ? "bg-green-600 text-white" : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab("individual")}
            >
              Individual view
            </button>
            <button
              className={`px-4 py-3 ${
                activeTab === "shortlisted" ? "bg-green-600 text-white" : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab("shortlisted")}
            >
              Shortlisted candidates
            </button>
            <div className="ml-auto flex items-center pr-4">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded border-gray-300">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded border-gray-300 ml-1">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-[250px] sticky left-0 bg-white z-10"></th>
                  {candidates.map((candidate) => (
                    <th key={candidate.id} className="text-center p-2 text-xs font-normal">
                      {candidate.id}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {skills.map((skill, skillIndex) => (
                  <tr key={skillIndex} className={skillIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-2 text-sm sticky left-0 bg-inherit z-10 border-r">{skill}</td>
                    {candidates.map((candidate, candidateIndex) => {
                      // For the first three rows (Experience, Can join in, Minimum salary expected)
                      if (skillIndex < 3) {
                        const value =
                          skillIndex === 0 ? candidate.score : skillIndex === 1 ? candidate.joinIn : candidate.salary
                        return (
                          <td key={candidateIndex} className="text-center p-2 text-sm">
                            {value}
                          </td>
                        )
                      }

                      // For skill matrix cells
                      const skillLevel = candidate.skills[skillIndex - 3] || 0
                      return (
                        <td key={candidateIndex} className="p-0">
                          <div className={`w-full h-8 ${getSkillColor(skillLevel)}`}></div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
