import Text from './elements/Text';
import TextContainer from '../FormView/container/Text/TextContainer';
import ClassificationInputs from '../constants/ClassificationInputs';

export default {
    [ClassificationInputs.TEXT]: {
        Input: Text,
        Panel: TextContainer
    },
    [ClassificationInputs.EMAIL]: {
        Input: Text,
        Panel: TextContainer
    },
    [ClassificationInputs.NUMBER]: {
        Input: Text,
        Panel: TextContainer
    }
};
