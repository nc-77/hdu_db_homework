import React from "react";
import PutOnProductForm from "./ManageProductForm";
import ManageProductTitlebarGridList from "./ManageProductTitlebarGridList";

export default function ManageProductCenter({
  uploadInfo,
  uploadProductHandleChange,
  uploadProductSubmit,
  showManageProductCenter,
  goodsInfo,
  handleGoods,
}) {
  return (
    <div id="manageProductCenter">
      {showManageProductCenter && (
        <>
          <ManageProductTitlebarGridList
            info={goodsInfo}
            handleChange={handleGoods}
          />
          <div className="market-search-params">
            <PutOnProductForm
              uploadInfo={uploadInfo}
              uploadProductHandleChange={uploadProductHandleChange}
              uploadProductSubmit={uploadProductSubmit}
            />
          </div>
        </>
      )}
    </div>
  );
}
