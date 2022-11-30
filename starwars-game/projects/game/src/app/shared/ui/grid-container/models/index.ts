export type GridConfiguration = {
  h2: {
    size: number
  }
};

const defaultConfiguration = { h2: { size: 10 } };
export const getDefaultConfiguration = () => defaultConfiguration;
