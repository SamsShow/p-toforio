import { Variants } from "framer-motion";

// Easing curves - typed as tuple for Framer Motion
export const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1];

// Fade up animation - for sections and content blocks
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

// Fade in animation - for subtle reveals
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

// Scale in animation - for cards and interactive elements
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

// Stagger container - wraps children that animate in sequence
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger item - for children inside stagger container
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

// Line expand animation - for underlines and dividers
export const lineExpand: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
      delay: 0.3,
    },
  },
};

// Expand animation - for expandable content
export const expandContent: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.4,
        ease: easeOut,
      },
      opacity: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: easeInOut,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
};

// Rotate animation - for chevrons and icons
export const rotate180: Variants = {
  closed: {
    rotate: 0,
  },
  open: {
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

// Hover lift - for cards
export const hoverLift = {
  rest: {
    y: 0,
    transition: {
      duration: 0.2,
      ease: easeOut,
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.2,
      ease: easeOut,
    },
  },
};
