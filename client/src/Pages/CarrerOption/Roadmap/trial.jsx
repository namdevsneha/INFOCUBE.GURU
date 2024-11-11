import React, { useState } from 'react';
import ReactFlow, { ReactFlowProvider, MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: 20, background: '#fff', borderRadius: '5px', border: '1px solid #ddd' }}>
      <div>{data.label}</div>
      <div className="ports">
        {/* Top port */}
        <div className="port top" style={{ position: 'absolute', top: -10, left: '50%' }} />
        {/* Bottom port */}
        <div className="port bottom" style={{ position: 'absolute', bottom: -10, left: '50%' }} />
        {/* Left port */}
        <div className="port left" style={{ position: 'absolute', left: -10, top: '50%' }} />
        {/* Right port */}
        <div className="port right" style={{ position: 'absolute', right: -10, top: '50%' }} />
      </div>
    </div>
  );
};

// Custom Node Style
const customNodeStyle = {
  borderRadius: '10px',
  border: '1px solid #ddd',
  padding: '20px',
  backgroundColor: '#fff',
  position: 'relative',
};

// Define node types
const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  { id: '1', type: 'custom', position: { x: 250, y: 0 }, data: { label: 'Film Director' }, draggable: false },
  { id: '2', type: 'custom', position: { x: 250, y: 100 }, data: { label: 'Education' }, draggable: false },
  { id: '3', type: 'custom', position: { x: 250, y: 200 }, data: { label: '9/10' }, draggable: false },
  
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', 
    style: { stroke: 'black', strokeWidth: 2, strokeDasharray: '5,5' },
    arrowHeadType: 'arrowclosed' },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', arrowHeadType: 'arrowclosed'  },
  { id: 'e3-4', source: '3', target: '4', type: 'smoothstep', animated: true },
  { id: 'e3-5', source: '3', target: '5', type: 'smoothstep', animated: true },
  
];

// Custom node component to add left and right handles
function FlowChart() {
 

  // Handle node click event
  const onNodeClick = (event, node) => {
    alert(`Node ${node.id} clicked`);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlowProvider>

     
<ReactFlow nodeTypes={nodeTypes} fitView nodes={initialNodes} edges={initialEdges} 
  panOnDrag={false} // Disable panning
  zoomOnScroll={false} // Disable zoom on scroll
  zoomOnPinch={false} // Disable zoom on pinch
  zoomOnDoubleClick={false}  />
</ReactFlowProvider>
    </div>
  );
}

export default FlowChart;
