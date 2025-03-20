import React, {useCallback, useEffect, useState} from 'react';
import {
    ReactFlow,
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import {
    nodes as initialNodes,
    edges as initialEdges,
} from './initial-elements';

const OverviewFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="top-right"
            style={{ backgroundColor: "#F7F9FB" }}
        >
            <Controls />
            <Background  />
        </ReactFlow>
    );
};

export default OverviewFlow;
