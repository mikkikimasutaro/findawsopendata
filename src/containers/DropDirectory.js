import React from "react";
import DropArea from "../containers/DropArea"; // コンポーネントのインポート
 
function DropDirectory() {
 
　const handleDrop = (event) => {};
 
  return (
    <DropArea >
      <div style={{ width: 600, height: 300, border: "solid", borderWidth: 2 }}>
        ドロップエリアですぅ
      </div>
    </DropArea>
  );
}
 
export default DropDirectory;