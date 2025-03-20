import React from 'react';
import { MarkerType } from '@xyflow/react';

export const nodes = [
    {
        id: '1-1',
        type: 'default',
        data: {
            label: 'Default Node 1',
        },
        position: { x: 150, y: 0 },
    },
    {
        id: '1-2',
        type: 'default',
        data: {
            label: 'Default Node 2',
        },
        position: { x: 0, y: 100 },
    },
    {
        id: '1-3',
        type: 'default',
        data: {
            label: 'Default Node 3',
        },
        position: { x: 300, y: 100 },
    },
];

export const edges = [
    {
        id: 'e1-2',
        source: '1-1',
        target: '1-2',
        label: 'edge',
        type: 'smoothstep',
    },
    {
        id: 'e1-3',
        source: '1-1',
        target: '1-3',
        type: 'smoothstep',
    },
];