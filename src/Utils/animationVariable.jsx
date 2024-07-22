export const animationVariable = (delay, hiddenX, hiddenY) => ({
  hidden: { x: hiddenX, y: hiddenY, opacity: 0 },
  visible: {
    x: 0,
    y:0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});
