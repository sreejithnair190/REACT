import {
  BaseButton,
  GoogleSignIn,
  Inverted
} from "./button-style";

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
  [BUTTON_TYPE_CLASSES.inverted]: Inverted,
}[buttonType])

const Button = ({children, buttonType, ...buttonProps}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...buttonProps}>
        {children}
    </CustomButton>
  )
}

export default Button;