import { Badge } from "@/components/ui/badge";

interface ITraitBadge {
  label: string;
  value: number;
}

const TraitBadge = ({ label, value }: ITraitBadge) => {
  if (value === 0) return null;
  return <Badge variant={value === 1 ? "default" : "secondary"}>{label}</Badge>;
};
export default TraitBadge;
