import dynamic from 'next/dynamic';
import '../style/global.css';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false
});

export default () => <DynamicComponentWithNoSSR />;
