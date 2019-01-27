export const tagsSelector = arr => {
  const arrayIds = [],
    objById = {};
  let maxScore = 0;

  arr.forEach(itm => {
    const { id, sentimentScore: score } = itm;
    arrayIds.push(id);
    objById[id] = itm;
    if (maxScore < score) maxScore = score;
  });

  return {
    arrayIds,
    objById,
    maxScore
  };
};
