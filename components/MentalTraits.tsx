import React from "react";
import { Activity, ExternalLink } from "lucide-react";
import RatingBar from "@/components/RatingBar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IBreedData } from "@/types/breed";
import { Button } from "@/components/ui/button";

interface IMentalTraitsProps {
  breed: IBreedData;
}

const HealthInformation = ({ breed }: IMentalTraitsProps) => {
  return breed.health_issues ? (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Health Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RatingBar
          label="Health Issues (Lower is better)"
          value={breed.health_issues}
          icon={Activity}
        />
        <div className="pt-4 space-y-2">
          <h4 className="font-medium text-sm">Learn More</h4>
          <div className="flex flex-wrap gap-2">
            {breed.cfa_url && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={breed.cfa_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  CFA Profile
                </a>
              </Button>
            )}
            {breed.vcahospitals_url && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={breed.vcahospitals_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  VCA Hospitals
                </a>
              </Button>
            )}
            {breed.wikipedia_url && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={breed.wikipedia_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Wikipedia
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    <p className="text-center">No data Found</p>
  );
};

export default HealthInformation;
