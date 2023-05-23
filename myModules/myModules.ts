/*
export const Q = (selector:string):HTMLElement | null => {
    const element = document.querySelector(selector);
    if (element !== null){
        return document.querySelector(selector)
    } else {
        return null;
    }
};
*/

export const Q: Function = (selector: string): HTMLElement | null => {
  const element:HTMLElement | null = document.querySelector(selector);
  return element !== null ? element : null;
};

/*
export const Qall:Function = (selectors:string): NodeListOf<Element> | null => {
    const elements = document.querySelectorAll(selectors);
    if(elements.length > 0 && elements !== null){
        return elements;
    } else {
        return null;
    }
};
*/

export const Qall: Function = (selectors: string): Element[] | null => {
  const elements = document.querySelectorAll(selectors);
  return elements.length ? Array.from(elements) : null;
};


export const Call:Function = (url:string):Promise<Response> => {
    return fetch(url)
    .then((response: Response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request Error");
      }
    })
    .catch((error: Error) => {
      console.error(error);
    });
};

export const CallAuth:Function = (url: string, auth:string):Promise<Response> => {
    return fetch(url, {
                headers: {
                  'Authorization': auth,
                },
            })
    .then((response: Response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request Error");
        }
    })
    .catch((error: Error) => {
      console.error(error);
    });
};