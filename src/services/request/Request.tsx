type objI = {
  [name: string]: any;
};

const message = `Sorry, the request was unsuccessful. Please come back later.`;

export const get = (urls: string, header: HeadersInit, payload?: objI) => {
  const url = new URL(urls);
  for (let i in payload) {
    url.searchParams.append(i, payload[i]);
  }
  fetch(url, {
    method: "GET",
    headers: header,
  })
    .then((resData) => resData.json())
    .then((resData) => console.log(resData));
};

export const post = (url: string, payload: objI) => {
  console.log(payload);
  const data = JSON.stringify(payload);
  console.log(data);
  const result = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjNhNTYyM2ZhMGZmOTQzMmQ0MDhlNDhiIiwicm9sZSI6ImFwcCIsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsInRva2VuX2lkIjoiNjNhNTYyNGNlZTc2Yzc3NzY1MDgyYWI4In0.o-mLJ2esKSZQIeGfrb_lpJYXyAcgb7Ax-OOBwQ0svEHb2ARBgpRG-U0I7Fw5SO0Kaeb9xSAPawBXjhLIWtRLLswUzd3z66R-nfXCG-vdjLUJa5n_DXf49bG0mXMY8kb8D0tjXpQIklCn5BWQkbA8m7Zp4bVeY7QoXA7iyGmw8vXkLnoxgqbU2DXMKdoCuupRvOAM3t-hKKnfxyqYvrDxfhvza3lkBo0-X7ELgMjhFAxR9WeT6hVFgqeOdG6Hi6UwhfYKpLd_Cwwy8z9WcklqEp9e3Bf43n0Ft7wddM-CDQ1Jjzu-xF9YOlR6Et8-Yt997xlvi6gHBcpEMlTkX6Fztw`,
    },
    body: JSON.stringify(payload),
  })
    return result ;
    // .then((resData) => resData.json())
    // .then((resData) => {
    //     console.log("resData",resData)
    //     return resData;
    // })
};
