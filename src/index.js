// project/src/index.js (JSX File)  

import React from 'react';
import ReactDOM from 'react-dom';

// 自定义的react组件
import { Face } from './components/Face';

const width = 960;
const height = 500;

const App = () => (
   <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={10}
        eyeOffsetX={110}
        eyeOffsetY={50}
        eyeRadius={50}
        mouthRadius={150}
        mouthWidth={20}
        mouthAngle={65}
    />
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
