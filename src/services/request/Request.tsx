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
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDk2Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjcyMzMyOTI5LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzYWQ4ZTQxNDEyOGJhNWFmNzAyYzZjYyJ9.TPs_nCkGOrwEx1uV_nW5R4N6iYHJNKHUYVLbBR-2QaPy4hADGf2WgM-l7wBew6OnhO5hkdar8u7zRiujxQZc0S1f75va6UFMJX9ZslY6QuJAL5KYgUD3wbIw6RnSjB1g0H80j31sTS3pBw6LiRAKHmbTIERg45kPJAgRGIV7u9cExTNpEVld19KFlXPjWVh2fZ-LC-Wm1J2HrpXm3HrtDfi93UYDrdtPlqbiohzLZ_C-r1JUuczD5RhTef6klQON2MZu6-EA2azFNL-2P0O7XPI2cXkcqW06uCzxJSt7lVrdOrPWBsag9htQdNZlSjKcMk1DZydMi9MFgdn7Zk6O_Q";

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
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDk2Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjcyMzMyNzk4LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzYWQ4ZGJlNDEyOGJhNWFmNzAyYzY4NSJ9.RVT4BmGfd7BVY-sxMmwNMsudiG3T16FaeSVIUYnujveO7yPMprmFkamNj2GODYbx66SNezqCy-UG0HYxnOXaB5cu-CilhBk7EWpTJv0S_YNCnYieZHSiZkNYj4gALewJJGDe2xXVjA6tR7tptav3TrT_PPFWihJL9NHpi4ZwNv6C1zkbouQmVkzdFZGG3IE9S-al5J99BKFPOELDfOA0tqYo07BO0s5gFeegLSx0i-8UbQXUyAcoJk3eMFcvjinnMTyoq9s-MGR5semtB9aaponfGrSwLFiD43rnu9dQ-2tMLm4ASi3aHpzBJOjH7wqX2TLBqTkznezBUL7sYlz3pg`,
    },
  }).then((resData) => resData.json());
  return result;
};

export const post = (url: string, payload: objI) => {
  if(isLogin){

  }
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
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDk2Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjcyMzMyNzk4LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzYWQ4ZGJlNDEyOGJhNWFmNzAyYzY4NSJ9.RVT4BmGfd7BVY-sxMmwNMsudiG3T16FaeSVIUYnujveO7yPMprmFkamNj2GODYbx66SNezqCy-UG0HYxnOXaB5cu-CilhBk7EWpTJv0S_YNCnYieZHSiZkNYj4gALewJJGDe2xXVjA6tR7tptav3TrT_PPFWihJL9NHpi4ZwNv6C1zkbouQmVkzdFZGG3IE9S-al5J99BKFPOELDfOA0tqYo07BO0s5gFeegLSx0i-8UbQXUyAcoJk3eMFcvjinnMTyoq9s-MGR5semtB9aaponfGrSwLFiD43rnu9dQ-2tMLm4ASi3aHpzBJOjH7wqX2TLBqTkznezBUL7sYlz3pg`,
    },
  }).then((resData) => resData.json());
  return result;
};
