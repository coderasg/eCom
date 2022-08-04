function useDebounce(callback: (arg: string[]) => void, duration: number) {
  let timer: ReturnType<typeof setTimeout>;

  function onChange(...argument: string[]) {
    if (timer) {
      clearInterval(timer);
    }
    timer = setTimeout(() => {
      callback(argument);
      clearInterval(timer);
    }, duration);
  }

  return onChange;
}

export default useDebounce;
