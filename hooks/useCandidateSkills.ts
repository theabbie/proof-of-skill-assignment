export interface SkillMap {
  [skillId: string]: {
    name: string;
    score: number;
  };
}

export async function fetchCandidateSkills(id: string): Promise<SkillMap> {
  const res = await fetch(`https://forinterview.onrender.com/people/${id}`);
  if (!res.ok) throw new Error("Failed to fetch candidate details");
  const json = await res.json();

  const skillsets = json?.data?.data?.skillset || [];

  const skills: SkillMap = {};

  for (const set of skillsets) {
    for (const skill of set.skills || []) {
      const skillId = skill.id;
      const name = skill.name;
      const pos = skill.pos;
      const score = pos?.[0]?.consensus_score ?? null;

      if (score !== null) {
        skills[skillId] = { name, score };
      }
    }
  }

  return skills;
}
