import React from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/router";

import { Button } from "./button";

const ParallelSidebar = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <Button
        size="sm"
        variant="outline"
        className="w-full flex gap-x-1"
        onClick={() => router.push("/crumbs/create")}
      >
        <Plus /> Create a crumb
      </Button>
    </div>
  );
};

export default ParallelSidebar;
