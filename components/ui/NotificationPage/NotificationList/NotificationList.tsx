"use client";

import { useMemo, useState } from "react";

import useApi from "@/hooks/useAPI";
import type { Notification } from "@/types/notifications/notifications";
import { ResponsePaginatedData } from "@/types/response/response";

import Pagination from "../../Pagination/Pagination";
import Spinner from "../../Spinner";
import NotificationItem from "../NotificationItem/NotificationItem";

const NotificationList = () => {
  const [page, setPage] = useState<number>(1);

  const generatedUrl = useMemo(() => {
    return `/notifications?perPage=10&page=${page}`;
  }, [page]);

  const { data, isLoading } =
    useApi<ResponsePaginatedData<Notification[]>>(generatedUrl);

  return (
    <div className="flex flex-col justify-between h-full mt-6">
      <div className="flex flex-col gap-y-5 h-1/2">
        {!isLoading && data?.data ? (
          data?.data.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
      <Pagination
        currentPage={page}
        lastPage={data?.meta.last_page ?? 0}
        onClick={(page) => setPage(page)}
      />
    </div>
  );
};

export default NotificationList;
