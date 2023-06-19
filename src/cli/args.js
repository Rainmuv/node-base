const parseArgs = () => {
  const args = process.argv.slice(2);
  const props = {};
  for (let i = 0; i < args.length; i += 2) {
      const name = args[i].slice(2);
      const propValue = args[i + 1];
      props[name] = propValue;
  }
  
  for (const [name, propValue] of Object.entries(props)) {
      console.log(`${name} is ${propValue}`);
  }
};

parseArgs();