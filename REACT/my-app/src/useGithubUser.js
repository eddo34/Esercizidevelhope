import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useGetGithubUser(username) {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return {
    data: data,
    error: error,
  };
}

export default useGetGithubUser;