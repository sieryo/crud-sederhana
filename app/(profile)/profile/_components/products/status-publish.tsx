"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BadgeCheck, BadgeX } from "lucide-react";

export const StatusPublish = ({ isPublished }: { isPublished: boolean }) => {
  const iconPublished = isPublished ? (
    <BadgeCheck className=" text-green-600" />
  ) : (
    <BadgeX className=" text-red-500" />
  );
  const tooltipLabel = isPublished ? "Published" : "Not Published";
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className=" mt-2">{iconPublished}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p className={isPublished ? "text-green-600" : "text-red-500"}>
          {tooltipLabel}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};
