module.exports = {
  prompt: ({ args }) => {
    const rootComponentDir = args.destination || 'src/components';
    return {
      rootComponentDir,
    };
  },
};
