export const useSmoothScroll = () => {
  let timer = {} as NodeJS.Timeout;

  const settings = {
    duration: 1000,
    easing: {
      outQuint(_s: number, t: number, b: number, c: number, d: number) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
    },
  };

  const scrollTo = (id: string) => {
    let percentage;
    let startTime: number;

    const node = document.getElementById(id)!;
    const nodeTop = node.offsetTop;
    const nodeHeight = node.offsetHeight;

    const body = document.body;
    const html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowHeight = window.innerHeight;

    const offset = 200;
    const delta = nodeTop + offset;
    const bottomScrollableY = height - windowHeight;

    const targetY =
      bottomScrollableY < delta
        ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
        : delta;

    startTime = Date.now();
    percentage = 0;

    if (timer) {
      clearInterval(timer);
    }

    const step = () => {
      let yScroll;
      const elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(timer);
      } else {
        yScroll = settings.easing.outQuint(
          0,
          elapsed,
          offset,
          targetY,
          settings.duration
        );
        window.scrollTo(0, yScroll);
        timer = setTimeout(step, 10);
      }
    };

    timer = setTimeout(step, 10);
  };

  return { scrollTo };
};
