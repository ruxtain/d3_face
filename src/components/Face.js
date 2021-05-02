import { FaceContour } from './FaceContour';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';
import { FaceContainer } from './FaceContainer';

export const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthRadius,
    mouthWidth,
    mouthAngle
}) => (
    <FaceContainer
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
    >
        <FaceContour 
            radius={centerY - strokeWidth / 2} 
            strokeWidth={strokeWidth} 
        />
        <Eyes
            eyeOffsetX={eyeOffsetX}
            eyeOffsetY={eyeOffsetY}
            eyeRadius={eyeRadius}
        />
        <Mouth 
            mouthWidth={mouthWidth}
            mouthRadius={mouthRadius}
            mouthAngle={mouthAngle}
        />
    </FaceContainer>
);