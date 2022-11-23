export interface IProps {
  label?: string;
  onPress?: () => void;
  showBackButton?: boolean;
  showAddtext?: boolean,
  onBackPress?: () => void
}

export interface INPUT_PROPS {
  value?: string,
  onChangeText?: ((text: string) => void) | undefined
}

export interface LIST_PROPS {
  item: {
    id: string,
    name: string,
    email: string,
    status: string,
    gender: string
  },
  index: number
}

