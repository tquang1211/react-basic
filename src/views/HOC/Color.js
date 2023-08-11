import React from "react";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//WrappedComponent: ở đây đầu vào đang là Home component
//props: ở đây có thể hiểu là home component có props nào thì return về phải trả lại props cho nó
const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Color;