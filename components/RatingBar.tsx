import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface IRatingBar {
  label: string;
  value: number;
  max?: number;
  icon: LucideIcon;
}

const RatingBar = ({ label, value, max = 5, icon: Icon }: IRatingBar) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-muted-foreground">
        {value}/{max}
      </span>
    </div>
    <Progress value={(value / max) * 100} className="h-2" />
  </div>
);

export default RatingBar;
