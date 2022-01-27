import { useContext } from 'react';
import { usePupType } from '../../context/PupContext';
import speedy from '../../pups/speedy-pup.jpg';
import banana from '../../pups/banana-pup.jpg';
import sleepy from '../../pups/sleepy-pup.jpg';

const PupImage = () => {
  const { puppyType } = usePupType();

  return (
    <img src={puppyType} alt="pup" />
  );
};

export default PupImage;
