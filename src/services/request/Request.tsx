import { ObjI } from "@cedcommerce/ounce-ui/dist/components/Breadcrumb/Breadcrumb";
import { useState } from "react";

type objI = {
  [name: string]: any;
  // loginToken: string;
};

// const [isLogin, setIslogin] = useState<boolean>(false);
const isLogin = false;

const beforeLogin =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDhiIiwicm9sZSI6ImFwcCIsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsInRva2VuX2lkIjoiNjNhNTYyNGNlZTc2Yzc3NzY1MDgyYWI4In0.o-mLJ2esKSZQIeGfrb_lpJYXyAcgb7Ax-OOBwQ0svEHb2ARBgpRG-U0I7Fw5SO0Kaeb9xSAPawBXjhLIWtRLLswUzd3z66R-nfXCG-vdjLUJa5n_DXf49bG0mXMY8kb8D0tjXpQIklCn5BWQkbA8m7Zp4bVeY7QoXA7iyGmw8vXkLnoxgqbU2DXMKdoCuupRvOAM3t-hKKnfxyqYvrDxfhvza3lkBo0-X7ELgMjhFAxR9WeT6hVFgqeOdG6Hi6UwhfYKpLd_Cwwy8z9WcklqEp9e3Bf43n0Ft7wddM-CDQ1Jjzu-xF9YOlR6Et8-Yt997xlvi6gHBcpEMlTkX6Fztw";

const afterLogin =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDk2Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjcyNjYyODE5LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzYjI5NmUzMDNkODljNTllMDA3MzRjYSJ9.s5kYkMAhpAuQlxn34MO-ojaC0KP_bOv9yGJ6ZA4MnaHaWTJo8F4dBVA0PfHKxJAuEZDgRakrHea3lYltaxMfELSuzEtgFFCk_1I04soIpCQ8qR2EiTGtLTFrf5P1qyIPFimbkcoBVqBPMLnEApyfcyt5Z-rJaNavF1fQZngUBpwwaUFQKi59R5nsOb5fI6Os9S4tTUipNOcNOvvtSAnLf7lp_LnReHV1-fYj-p9Eodf1l88hxqW4idtFK77g2xYl6BMkk4xxzF4UXTa_tlXfOICsYmwsR1yiUiz4Hgz8CEeRAXwpw2d2IvWnRWRfqCrkl9cSl8D-tDAgd_xifJ1ZcQ";

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
      Authorization: afterLogin,
    },
  }).then((resData) => resData.json());
  return result;
};

export const post = (url: string, payload: objI) => {
  alert(sessionStorage.getItem("loginStatus"));
  if (sessionStorage.getItem("loginStatus")) {
    const result = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: afterLogin,
      },
      body: JSON.stringify(payload),
    });
    return result;
  }
  alert("sdsd");
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
      Authorization: afterLogin,
    },
  }).then((resData) => resData.json());
  return result;
};
