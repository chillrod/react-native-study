import {Button as Btn, Colors} from 'react-native-ui-lib';

export const Button = ({
  label,
  type = 'primary',
  size = 'large',
  onPress,
}: {
  label: string;
  type?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  onPress?: () => void;
}) => {
  return (
    <Btn
      onPress={onPress}
      label={label}
      backgroundColor={type === 'primary' ? Colors.blue30 : Colors.grey10}
      borderRadius={5}
      size={size}
    />
  );
};
