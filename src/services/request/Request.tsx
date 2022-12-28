import { ObjI } from "@cedcommerce/ounce-ui/dist/components/Breadcrumb/Breadcrumb";

type objI = {
  [name: string]: any;
};

const message = `Sorry, the request was unsuccessful. Please come back later.`;

export const get = (urls: string, payload?: objI) => {
  const url = new URL(urls);
  if (payload) {
    for (let i in payload) {
      url.searchParams.append(i, payload[i]);
    }
  }
  const result = fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDk2Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjcyMjM0Mjc3LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzYWMwY2U1ZDAyZTU4MTg3NzA3M2MyNiJ9.Sxv0alKKwhyeG4ILN7360bmHTQ-alAuoCml0TPlPZgqW2dmxq44MdT-LOkDyGXebKb2Q1nBnmjP25gUfQP2ZR1aIjeUAt7c7YHulileKnWLjbWd5csPZdHA-s7rbT7yox6a2DN4V9ijar6epLGkn4G7LpO6TJgCFt3ZfCmSuuBsHIhK_Vj2pwmXuUSK5GLDonlNVZ0oY0ZdYmRlmEh3euIu-tqkvdTIpyd7vLs2ZZrzRPRhGqJzDY6RN3BUjq-52lFoGkXx-0MprtsYxQ62bmSnLsGUxWYZcpA-8C2a7gKvuRGyFy3ixI0isz3I0yLrbVf5gIz_YPu17h7bUUgwdlg`,
    },
  }).then((resData) => resData.json());
  return result;
};

export const post = (url: string, payload: objI) => {
  const result = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDhiIiwicm9sZSI6ImFwcCIsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsInRva2VuX2lkIjoiNjNhNTYyNGNlZTc2Yzc3NzY1MDgyYWI4In0.o-mLJ2esKSZQIeGfrb_lpJYXyAcgb7Ax-OOBwQ0svEHb2ARBgpRG-U0I7Fw5SO0Kaeb9xSAPawBXjhLIWtRLLswUzd3z66R-nfXCG-vdjLUJa5n_DXf49bG0mXMY8kb8D0tjXpQIklCn5BWQkbA8m7Zp4bVeY7QoXA7iyGmw8vXkLnoxgqbU2DXMKdoCuupRvOAM3t-hKKnfxyqYvrDxfhvza3lkBo0-X7ELgMjhFAxR9WeT6hVFgqeOdG6Hi6UwhfYKpLd_Cwwy8z9WcklqEp9e3Bf43n0Ft7wddM-CDQ1Jjzu-xF9YOlR6Et8-Yt997xlvi6gHBcpEMlTkX6Fztw`,
    },
    body: JSON.stringify(payload),
  });
  return result;
};

export const deleteRequest = (urls: string, payload?: any) => {
  const url = new URL(urls);
  if (payload) {
    for (let i in payload) {
      url.searchParams.append(i, payload[i]);
    }
  }
  const result = fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDk2Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjcyMjM0Mjc3LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzYWMwY2U1ZDAyZTU4MTg3NzA3M2MyNiJ9.Sxv0alKKwhyeG4ILN7360bmHTQ-alAuoCml0TPlPZgqW2dmxq44MdT-LOkDyGXebKb2Q1nBnmjP25gUfQP2ZR1aIjeUAt7c7YHulileKnWLjbWd5csPZdHA-s7rbT7yox6a2DN4V9ijar6epLGkn4G7LpO6TJgCFt3ZfCmSuuBsHIhK_Vj2pwmXuUSK5GLDonlNVZ0oY0ZdYmRlmEh3euIu-tqkvdTIpyd7vLs2ZZrzRPRhGqJzDY6RN3BUjq-52lFoGkXx-0MprtsYxQ62bmSnLsGUxWYZcpA-8C2a7gKvuRGyFy3ixI0isz3I0yLrbVf5gIz_YPu17h7bUUgwdlg`,
    },
  }).then((resData) => resData.json());
  return result;
};
