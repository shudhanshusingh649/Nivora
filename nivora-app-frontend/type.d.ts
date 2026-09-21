
declare global {
    interface AppTab {
    name: string;
    title: string;
    icon: string;
  }

  interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
  }

  interface Category {
    id: number;
    name: string;
    icon: any;
    color: string;
}
}

export {};