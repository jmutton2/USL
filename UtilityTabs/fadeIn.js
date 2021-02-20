import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

import FadeInView from './Fade.js'; 

function app() {
    return (
        <FadeInView>
            <Text>Fading</Text>
        </FadeInView>
    )
}
export default app; 