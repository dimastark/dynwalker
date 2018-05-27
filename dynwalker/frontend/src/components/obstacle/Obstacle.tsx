import * as React from 'react';
import { Rect, Text } from 'react-konva';

interface Props {
    color?: string
    scale?: number,
    text?: string,
    x: number,
    y: number
}

const Obstacle: React.StatelessComponent<Props> = props => {
    const {color = '#202124', x, y, scale = 1, text = ''} = props;

    return (
        <React.Fragment>
            <Rect
                x={x * scale}
                y={y * scale}
                fill={color}
                width={scale}
                height={scale}/>
            {text ? (
                <Text
                    text={text}
                    x={scale * x}
                    y={scale * y}
                    fontSize={scale / 2}
                    fill="white"/>
            ) : null}
        </React.Fragment>
    );
};

export default Obstacle;
