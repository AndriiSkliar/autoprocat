import { ReactComponent as IconAuto } from 'assets/icons/auto.svg';
import { LoaderWrapper, IconAutoWrapper } from './LoaderWrapper';

const Loader = () => (
    <LoaderWrapper>
        <IconAutoWrapper>
            <IconAuto />
        </IconAutoWrapper>
    </LoaderWrapper>
);

export default Loader;