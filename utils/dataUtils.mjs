export const getRandom = (dataArr, shouldOpen) => {
  if (!Array.isArray(dataArr))
    return { status: 'Error', message: 'Error: Error parsing the data. Something has gone wrong.' };

  const randomPost = dataArr.children[Math.floor(Math.random() * dataArr.children.length)];

  if (shouldOpen) {
    open(randomPost.data.permalink);
  } else {
    return {
      status: 'Success',
      link: randomPost.data.permalink,
      title: randomPost.data.title,
      author: randomPost.data.author,
      subreddit: randomPost.data.subreddit,
      score: +randomPost.data.score,
      num_comments: randomPost.data.num_comments,
      created_utc: randomPost.data.created_utc,
    };
  }
};

export const getLatest = (dataArr, shouldOpen) => {
  if (!Array.isArray(dataArr))
    return { status: 'Error', message: 'Error: Error parsing the data. Something has gone wrong.' };

  const latestPost = dataArr.children[0];

  if (shouldOpen) {
    open(latestPost.data.permalink);
  } else {
    return {
      status: 'Success',
      link: latestPost.data.permalink,
      title: latestPost.data.title,
      author: latestPost.data.author,
      subreddit: latestPost.data.subreddit,
    };
  }
};
