export const fetcher = async (type = '', ext = '', isLanding = false) => {
  try {
    const query = await fetch(`https://www.reddit.com${type}${ext}.json`);
    const data = await query.json();
    return data;
  } catch (e) {
    return `Error: ${e}`;
  }
};
