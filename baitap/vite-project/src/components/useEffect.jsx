import { useState, useEffect } from "react";

function TitleChanger() {
    // Thay doi title trang web su dung useEffect
  const [text, setText] = useState("");

  useEffect(() => {document.title = text;}, [text]);
    // ket qua tra ve UI
  return (
    <div>
      <input placeholder="Nhap ten" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default TitleChanger;
