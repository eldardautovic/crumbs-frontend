"use client";

import { useState } from "react";
import clsx from "clsx";

import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../pagination";

interface PaginationProps {
  lastPage: number;
  currentPage: number;
  onClick: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  lastPage,
  currentPage,
  onClick,
}) => {
  const [page, setPage] = useState(currentPage ?? 1);

  const pages = Array.from({ length: lastPage }, (_, i) => ++i);

  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onClick(currentPage > 1 ? currentPage - 1 : 1)}
            href="#"
          />
        </PaginationItem>
        {pages.map((i) => {
          const isFirst = i === 1;
          const isLast = i === lastPage;
          const nearToCurrent = i >= currentPage - 1 && i <= currentPage + 1;

          const areFirsts = (i === 3 || i === 4 || i === 5) && currentPage < i;
          const areLasts =
            (i === lastPage - 2 || i === lastPage - 3 || i === lastPage - 4) &&
            currentPage > i;

          const shouldRenderBtn =
            isFirst || isLast || nearToCurrent || areFirsts || areLasts;

          return shouldRenderBtn ? (
            <PaginationItem>
              <PaginationLink
                className={clsx({ "bg-gray-800 rounded": i === currentPage })}
                onClick={() => onClick(i)}
                href="#"
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          ) : null;
        })}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => onClick(lastPage > 1 ? currentPage + 1 : 1)}
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};

export default Pagination;
