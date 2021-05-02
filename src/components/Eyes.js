export const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
    <>
        // left eye
        <circle
            cx={- eyeOffsetX}
            cy={- eyeOffsetY}
            r={eyeRadius}
        />
        // right eye
        <circle
            cx={eyeOffsetX}
            cy={- eyeOffsetY}
            r={eyeRadius}
        />
    </>
);
