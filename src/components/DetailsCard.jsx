import React from "react";
import { useGetUsersQuery } from "../services/GitHubApi";

export default function DetailsCard({ value }) {
  const { data, isFetching, error } = useGetUsersQuery(value);

  const originalTimestamp = data?.created_at;
  const date = new Date(originalTimestamp);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  if (isFetching) return "loading...";
  if (error) return "Something went wrong";
  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <div className="card rounded-xl border-[5px] border-[#010409] p-10">
        <figure>
          <img
            className="h-[300px] w-[300px] rounded-full border-4 border-[#010409] "
            src={`${data?.avatar_url || "/assets/empty.png"}`}
            alt="Avatar"
          />
        </figure>
        <h1 className="mt-5 text-3xl font-bold">Name - {data?.name}</h1>
        <p className="my-3 text-xl font-light">Username - {data?.login}</p>
        <p className="text-lg">No. of public repos - {data?.public_repos}</p>
        <p className="my-1 text-lg">
          No. of public gists - {data?.public_gists}
        </p>
        <p className="text-lg">Profile created at - {`${formattedDate}`}</p>
      </div>
    </div>
  );
}
