declare module '*.module.scss';

declare module '*.svg' {
  // eslint-disable-next-line
  const content: any;
  export default content;
}
