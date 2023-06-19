const parseEnv = (prefix) => {
  const arr = Object.entries(process.env)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, val], i) => `${key}${i+1}=${val}${i+1}`).join('; ');
  console.log(arr)
};

parseEnv('RSS_');