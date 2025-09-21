"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Heart,
  Baby,
  Dog,
  Cat,
  Users,
  Battery,
  Scissors,
  Activity,
  Volume2,
} from "lucide-react";
import RatingBar from "./RatingBar";
import { IBreedData } from "@/types/breed";
import TraitBadge from "@/components/TraitBadge";

const Characteristics = ({ breed }: { breed: IBreedData }) => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Social Traits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <RatingBar
              label="Affection Level"
              value={breed.affection_level}
              icon={Heart}
            />
            <RatingBar
              label="Child Friendly"
              value={breed.child_friendly}
              icon={Baby}
            />
            <RatingBar
              label="Dog Friendly"
              value={breed.dog_friendly}
              icon={Dog}
            />
            {breed.cat_friendly && (
              <RatingBar
                label="Cat Friendly"
                value={breed.cat_friendly}
                icon={Cat}
              />
            )}
            <RatingBar
              label="Stranger Friendly"
              value={breed.stranger_friendly}
              icon={Users}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Physical Traits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <RatingBar
              label="Energy Level"
              value={breed.energy_level}
              icon={Battery}
            />
            <RatingBar
              label="Grooming Needs"
              value={breed.grooming}
              icon={Scissors}
            />
            <RatingBar
              label="Shedding Level"
              value={breed.shedding_level}
              icon={Activity}
            />
            <RatingBar
              label="Vocalization"
              value={breed.vocalisation}
              icon={Volume2}
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Special Characteristics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <TraitBadge label="Hypoallergenic" value={breed.hypoallergenic} />
            <TraitBadge label="Rare Breed" value={breed.rare} />
            <TraitBadge label="Hairless" value={breed.hairless} />
            {breed.lap !== undefined && (
              <TraitBadge label="Lap Cat" value={breed.lap} />
            )}
            {breed.indoor !== undefined && (
              <TraitBadge label="Indoor Cat" value={breed.indoor} />
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Characteristics;
