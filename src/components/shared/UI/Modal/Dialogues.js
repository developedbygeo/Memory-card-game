import { CtaButton } from '../Button.styled';

export const IntroDialogue = ({ onDisable }) => {
  return (
    <>
      <h2>Welcome!</h2>
      <p>
        The rules are simple: Each time you click on an image, they shuffle. Click twice on the same image and
        you <span>lose</span>. Else, you <span>earn</span> 1 point each time you click on an image that has
        not been clicked before.
      </p>
      <CtaButton onClick={onDisable} alignSelf="flex-end">
        Got it
      </CtaButton>
    </>
  );
};

export const scoreDialoguee = () => {
  return <div>PLACEHOLDER</div>;
};
