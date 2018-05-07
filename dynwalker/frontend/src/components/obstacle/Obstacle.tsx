import * as React from 'react';
import { Circle, Rect } from 'react-konva';

enum Shape {
    Circle = 'circle',
    Rectangle = 'rectangle'
}

interface BaseProps {
    color: string
    coordinates: [number, number]
}

interface CircleProps {
    shape: Shape.Circle,
    dimensions: [number]
}

interface RectangleProps {
    shape: Shape.Rectangle,
    dimensions: [number, number]
}

type Props = BaseProps & (CircleProps | RectangleProps);

const Obstacle: React.StatelessComponent<Props> = props => {
    const { color, coordinates: [x, y], dimensions, shape } = props;

    const baseProps = { x, y, fill: color, shadowBlur: 5 };

    if (shape === Shape.Rectangle) {
        return (
            <Rect
                {...baseProps}
                width={dimensions[0]}
                height={dimensions[1]}/>
        );
    }

    if (shape === Shape.Circle) {
        return (
            <Circle
                {...baseProps}
                radius={dimensions[0]}/>
        );
    }

    return null;
};

Obstacle.defaultProps = {
    color: '#000000'
};

export default Obstacle;
