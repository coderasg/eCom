export const objectToQueryString = <T>(obj: T): string => {
  let queryStr = '';

  for (const [key, value] of Object.entries(obj)) {
    queryStr = !queryStr ? `?${key}=${value}` : `${queryStr}&${key}=${value}`;
  }

  return queryStr;
};


export default objectToQueryString;