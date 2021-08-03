import React from "react";

export default function ManageProductForm({
  uploadInfo,
  uploadProductHandleChange,
  uploadProductSubmit,
}) {
  return (
    <form
      encType="multipart/form-data"
      onSubmit={uploadProductSubmit}
      noValidate
    >
      <div className="form-inputs">
        <label className="market-form-label">商品名</label>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="商品名"
          value={uploadInfo.name || ""}
          onChange={uploadProductHandleChange}
        />
      </div>
      <div className="form-inputs">
        <label className="market-form-label">商品价格</label>
        <input
          className="form-input"
          type="text"
          name="price"
          placeholder="商品价格"
          value={uploadInfo.price || ""}
          onChange={uploadProductHandleChange}
        />
      </div>
      <div className="form-inputs">
        <label className="market-form-label">选择类别</label>
        <select
          className="form-input"
          name="label"
          onChange={uploadProductHandleChange}
          value={uploadInfo.label || ""}
        >
          <option value=""></option>
          <option value="数码">数码</option>
          <option value="衣物">衣物</option>
          <option value="书籍">书籍</option>
        </select>
      </div>
      <div className="form-inputs">
        <label className="market-form-label">商品数量</label>
        <input
          className="form-input"
          type="number"
          name="number"
          placeholder="商品数量"
          value={uploadInfo.number || ""}
          onChange={uploadProductHandleChange}
        />
      </div>
      <div className="form-inputs">
        <label className="market-form-label">商品描述</label>
        <input
          className="form-input"
          type="text"
          name="text"
          placeholder="商品描述"
          value={uploadInfo.text || ""}
          onChange={uploadProductHandleChange}
        />
      </div>
      <div className="form-inputs">
        <label className="market-form-label">商品图片</label>
        <input className="form-input" type="file" id="file" name="filename" />
      </div>

      <button type="submit">上传</button>
    </form>
  );
}
