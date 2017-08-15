const grid = 8;

const getItemStyle = (draggableStyle, isDragging) => ({
  userSelect: 'none',
  padding: grid * 2,
  marginBottom: grid,
  background: isDragging ? 'hotpink' : 'grey',
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
});

export { getItemStyle, getListStyle };
