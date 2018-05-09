import * as React from 'react';
import { Circle, Rect, Text } from 'react-konva';

enum Shape {
    Circle = 'circle',
    Rectangle = 'rectangle'
}

interface BaseProps {
    color?: string
    scale?: number,
    text?: string,
    x: number,
    y: number
}

interface CircleProps {
    shape: Shape.Circle,
    radius: number
}

interface RectangleProps {
    shape: Shape.Rectangle,
    width: number,
    height: number
}

type Props = BaseProps & (CircleProps | RectangleProps);

const Obstacle: React.StatelessComponent<Props> = props => {
    const {color = '#202124', x, y, scale = 1, text = ''} = props;

    const gap = 10 * scale;
    const baseProps = {
        x: x * scale,
        y: y * scale,
        fill: color
    };
    const baseTextProps = {
        fontSize: 18 * scale,
        fill: 'white',
        text
    };

    return (
        props.shape === Shape.Rectangle ? (
            <React.Fragment>
                <Rect
                    {...baseProps}
                    width={props.width * scale}
                    height={props.height * scale}/>
                {text ? (
                    <Text
                        x={scale * x + gap}
                        y={scale * y + (props.height * scale) / 2}
                        {...baseTextProps}/>
                ) : null}
            </React.Fragment>
        ) :
        props.shape === Shape.Circle ? (
            <React.Fragment>
                <Circle
                    {...baseProps}
                    radius={props.radius * scale}/>
                {text ? (
                    <Text
                        x={scale * x - props.radius * scale + gap}
                        y={scale * y - gap}
                        {...baseTextProps}/>
                ) : null}
            </React.Fragment>
        ) : null
    );
};

export default Obstacle;
