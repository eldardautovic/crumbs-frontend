import { Crumb } from "@/types/crumbs/crumbs";

import CrumbItem from "../CrumbItem/CrumbItem";

interface CrumbsListProps {
  crumbs: Crumb[];
}

const CrumbsList: React.FC<CrumbsListProps> = ({ crumbs }) => {
  return (
    <section className="mt-4 grid grid-cols-2 gap-3">
      {crumbs.map((element) => (
        <CrumbItem key={element.id} {...element} />
      ))}
    </section>
  );
};

export default CrumbsList;
