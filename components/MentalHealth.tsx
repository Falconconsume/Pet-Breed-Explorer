import React from "react";
import { Brain, Users, Home } from "lucide-react";
import RatingBar from "@/components/RatingBar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IBreedData } from "@/types/breed";

const MentalHealth = ({ breed }: { breed: IBreedData }) => {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Mental Traits</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RatingBar
          label="Intelligence"
          value={breed.intelligence}
          icon={Brain}
        />
        <RatingBar
          label="Adaptability"
          value={breed.adaptability}
          icon={Home}
        />
        <RatingBar
          label="Social Needs"
          value={breed.social_needs}
          icon={Users}
        />
      </CardContent>
    </Card>
  );
};

export default MentalHealth;
