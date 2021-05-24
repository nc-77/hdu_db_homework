import React from "react";
import "./MarketSearchBar.css";

export default function MarketSearchBar({
  MarketHandleChange,
  MarketHandleSubmit,
  searchParams,
}) {
  return (
    <form onSubmit={MarketHandleSubmit} noValidate>
      <div className="form-inputs">
        <label className="market-form-label">物品名称</label>
        <input
          className="form-input"
          type="text"
          id="name"
          placeholder="物品名称"
          value={searchParams.name || ""}
          onChange={MarketHandleChange}
        />
      </div>
      <div className="form-inputs">
        <label className="market-form-label">选择类别</label>
        <select
          className="form-input"
          id="label"
          onChange={MarketHandleChange}
          value={searchParams.label || ""}
        >
          <option value=""></option>
          <option value="数码">数码</option>
          <option value="衣物">衣物</option>
          <option value="书籍">书籍</option>
        </select>
      </div>
      <button type="submit">搜索</button>
    </form>
  );
}
