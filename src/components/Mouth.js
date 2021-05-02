import { arc } from 'd3';

export const Mouth = ({mouthRadius, mouthWidth, mouthAngle}) => {
    const mouthArc = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        // 这里是弧度制，0表示顶部，然后顺时针推进，比如 Math.PI * 2 就是一个整圆
        .startAngle(Math.PI / 100 * mouthAngle)      
        .endAngle(Math.PI / 100 * (mouthAngle + (100 - mouthAngle) * 2));
        
    return <path d={mouthArc()} />;
};