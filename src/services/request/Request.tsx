type objI = {
  [name: string]: any;
};

const beforeLogin =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDhiIiwicm9sZSI6ImFwcCIsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsInRva2VuX2lkIjoiNjNhNTYyNGNlZTc2Yzc3NzY1MDgyYWI4In0.o-mLJ2esKSZQIeGfrb_lpJYXyAcgb7Ax-OOBwQ0svEHb2ARBgpRG-U0I7Fw5SO0Kaeb9xSAPawBXjhLIWtRLLswUzd3z66R-nfXCG-vdjLUJa5n_DXf49bG0mXMY8kb8D0tjXpQIklCn5BWQkbA8m7Zp4bVeY7QoXA7iyGmw8vXkLnoxgqbU2DXMKdoCuupRvOAM3t-hKKnfxyqYvrDxfhvza3lkBo0-X7ELgMjhFAxR9WeT6hVFgqeOdG6Hi6UwhfYKpLd_Cwwy8z9WcklqEp9e3Bf43n0Ft7wddM-CDQ1Jjzu-xF9YOlR6Et8-Yt997xlvi6gHBcpEMlTkX6Fztw";

const afterLogin = sessionStorage.getItem("token") ?? "sujeet";

export const get = (urls: string, payload?: objI, github?: any) => {
  const afterLogin = sessionStorage.getItem("token") ?? "";
  const url = new URL(urls);
  if (payload) {
    for (let i in payload) {
      url.searchParams.append(i, payload[i]);
    }
  }
  if (github === "github") {
    const result = fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer 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`,
      },
    }).then((resData) => resData.json());
    return result;
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
  const result = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: beforeLogin,
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

export const put = (url: string, payload?: any) => {
  const result = fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: afterLogin,
    },
    body: JSON.stringify(payload),
  }).then((resData) => resData.json());
  return result;
};
