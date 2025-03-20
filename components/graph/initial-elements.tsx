import React from 'react';
import { MarkerType } from '@xyflow/react';

export const nodes = [
    {
        id: '1-1',
        type: 'default',
        data: {
            label: 'Smart Manufacturing Roadmap',
        },
        position: { x: 300, y: 0 },
    },
    {
        id: '1-2',
        type: 'default',
        data: {
            label: 'Risk-Free Technology Testing',
        },
        position: { x: 100, y: 150 },
    },
    {
        id: '1-3',
        type: 'default',
        data: {
            label: 'Financial Security & Funding Support',
        },
        position: { x: 500, y: 150 },
    },
    {
        id: '1-4',
        type: 'default',
        data: {
            label: 'Industry Expert Advisory',
        },
        position: { x: 100, y: 300 },
    },
    {
        id: '1-5',
        type: 'default',
        data: {
            label: 'Automated Process Efficiency',
        },
        position: { x: 500, y: 300 },
    },
    {
        id: '1-6',
        type: 'default',
        data: {
            label: 'Competitive & Sustainable Growth',
        },
        position: { x: 300, y: 450 },
    },
];

export const edges = [
    {
        id: 'e1-2',
        source: '1-1',
        target: '1-2',
        label: 'Pilot projects with low financial risk',
        type: 'smoothstep',
    },
    {
        id: 'e1-3',
        source: '1-1',
        target: '1-3',
        label: 'Clear ROI & phased investment strategies',
        type: 'smoothstep',
    },
    {
        id: 'e1-4',
        source: '1-2',
        target: '1-4',
        label: 'Guidance from proven industry leaders',
        type: 'smoothstep',
    },
    {
        id: 'e1-5',
        source: '1-3',
        target: '1-5',
        label: 'Gradual integration of automation & AI',
        type: 'smoothstep',
    },
    {
        id: 'e1-6',
        source: '1-4',
        target: '1-6',
        label: 'Sustainable innovation adoption',
        type: 'smoothstep',
    },
    {
        id: 'e1-6b',
        source: '1-5',
        target: '1-6',
        label: 'Boosting productivity while maintaining stability',
        type: 'smoothstep',
    },
];
