import { CtaButton, SecondaryButton } from '../Button.styled';
import { ReactComponent as FireworksSVG } from '../../../../assets/fireworks.svg';

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

export const WinDialogue = ({ onDisable, onPlay }) => {
  return (
    <>
      <FireworksSVG />
      <h2>Woah!</h2>
      <p>
        Congratulations, <strong>you aced it</strong>! If you want to keep playing, you can do so by either
        keeping the <span>same</span> images or getting <span>new</span> ones.
      </p>
      <div>
        <SecondaryButton onClick={onDisable} title="Play again with the same images">
          Keep the same images
        </SecondaryButton>
        <CtaButton onClick={onPlay} alignSelf="flex-end" title="Play again with new images">
          Play with new images
        </CtaButton>
      </div>
    </>
  );
};

export const scoreDialoguee = () => {
  return <div>PLACEHOLDER</div>;
};
