export interface Candidate {
  id: string;
  name: string;
}

export async function fetchCandidateList(): Promise<Candidate[]> {
  const res = await fetch("https://forinterview.onrender.com/people");
  if (!res.ok) throw new Error("Failed to fetch candidate list");
  const data = await res.json();
  return data.map((person: any) => ({ id: person.id, name: person.name }));
}
