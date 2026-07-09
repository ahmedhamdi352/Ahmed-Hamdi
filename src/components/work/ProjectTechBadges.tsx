import { Badge } from "@/components/ui/Badge";

type ProjectTechBadgesProps = {
  technologies: string[];
  limit?: number;
};

export function ProjectTechBadges({
  technologies,
  limit,
}: ProjectTechBadgesProps) {
  const visibleTechnologies = limit
    ? technologies.slice(0, limit)
    : technologies;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTechnologies.map((technology) => (
        <Badge key={technology}>{technology}</Badge>
      ))}
    </div>
  );
}
